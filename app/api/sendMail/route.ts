import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // הוסף את הלוגים כאן
        console.log('GMAIL_USER:', process.env.GMAIL_USER);
        console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

        // קבלת הנתונים מהבקשה
        const { name, email, phone, message }: { name: string; email: string; phone: string; message: string } = await request.json();

        // יצירת תצורת nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER!,
                pass: process.env.GMAIL_PASS!,
            },
        });

        // הגדרת תוכן המייל בפורמט HTML עם כיווניות מימין לשמאל
        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER!,
            subject: `הודעה חדשה מאת ${name}`,
            html: `
                <div style="direction: rtl; text-align: center; font-family: Arial, sans-serif;">
                    <h2 style="color: #007BFF;">פרטי טיפול חדש התקבלו</h2>
                    <p><strong>שם מלא:</strong> ${name}</p>
                    <p><strong>דואר אלקטרוני:</strong> ${email}</p>
                    <p><strong>מספר נייד:</strong> ${phone}</p>
                    <p><strong>פרטי טיפול:</strong> ${message}</p>
                </div>
            `,
        };

        // שליחת המייל
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}
