import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";
import { configureOpenAI } from "../config/openai-config.js";


export const generateChatCompletion = async (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    try {
    const user = await User.findById(res.locals.jwtData.id);
    if(!user) return res.status(401).json({ message: "User Not Registered or Token Malfunctioned" });

    // grab chats of user
    const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" }); 
    
    // send all chats with  new one to openAI API
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);

    // get latest response
    const chatResponse = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k-0613",
        messages: chats,
    });
      
    user.chats.push(chatResponse.data.choices[0].message);
    
    await user.save();

    return res.status(200).json({ chats: user.chats });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" }); 
    }
};