import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../SocketIO/server.js";



export const sendMessage = async(req, res) =>{
    // console.log("message send", req.params.id, req.body.message);          message send 100 Hello
    try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // current logged in user

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });


    if (newMessage) {
        conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]); // run parallel

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    
    res
    .status(201)
    .json( {message: "Message sent sucessfully", newMessage});
  } catch (error) {
    console.log("Error in Sending Message", error);
    res.status(500).json({ error: "Internal server error" });
  }
}



export const getMessage = async (req, res) => {
    try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id; // current logged in user
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, chatUser] },
    })
    .populate("messages");       //show previous content
    if (!conversation) {
        return res.status(201).json({message: "No conversation found"});
    }
    const messages = conversation.messages;
    res.status(201).json(messages);
    } catch (error) {
    console.log("Error in getMessage", error);
    res.status(500).json({ error: "Internal server error" });
    }
};