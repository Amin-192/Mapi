import connectToDb from "../../../../utils/database";
import Prompt from '../../../../models/prompt'; // Use "Prompt"

export const POST = async (req, res) => {
  try {
    const { userId, prompt, tag } = await req.json();
    console.log("Data received at API endpoint:", { userId, prompt, tag });
    
    await connectToDb();
    const newPrompt = new Prompt({ // Use "Prompt" here
      creator: userId,
      prompt,
      tag
    });
    await newPrompt.save();
    
    return new Response(JSON.stringify(newPrompt), {
      status: 201
    });
  } catch (error) {
    console.error("Error creating prompt:", error);
    return new Response('Failed to create prompt', {
      status: 500
    });
  }
};