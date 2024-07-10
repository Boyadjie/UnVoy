import dotenv from 'dotenv';
import {NextRequest, NextResponse} from 'next/server';
import OpenAI from 'openai';

dotenv.config();
const openai = new OpenAI();

export async function POST(request: NextRequest) {
  try {
    const {value} = await request.json();

    const gpt4Completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You only return in JSON a coordinates key with a value in this format [35.5, 138.45], then a title of the location with a title key',
        },
        {role: 'user', content: value},
      ],
    });

    const responseText = gpt4Completion.choices[0]?.message?.content;

    if (responseText && responseText[0] === '{') {
      const json = JSON.parse(responseText);
      return NextResponse.json(json);
    } else {
      return NextResponse.json({tryAgain: true});
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
  }
}
