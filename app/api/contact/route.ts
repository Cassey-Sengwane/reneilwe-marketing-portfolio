import { NextResponse } from "next/server";

export async function POST(request: Request) {
try {
const body = await request.json();
const { name, company, email, opportunityType, message } = body;

// Validate required fields
if (!name || !company || !email || !message) {
return NextResponse.json(
{ error: "All required fields must be supplied." },
{ status: 400 }
);
}

// Email regex validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
return NextResponse.json(
{ error: "Invalid professional email format." },
{ status: 400 }
);
}

// Log the inquiry for review (connect to Resend, SendGrid, or Supabase in production)
console.log("[INCOMING OPPORTUNITY INQUIRY]", {
name: name.trim(),
company: company.trim(),
email: email.trim().toLowerCase(),
opportunityType,
messageLength: message.length,
timestamp: new Date().toISOString(),
});

return NextResponse.json(
{
success: true,
message: "Opportunity inquiry securely received. Reneilwe will respond promptly.",
},
{ status: 200 }
);
} catch (error) {
return NextResponse.json(
{ error: "Internal server error processing opportunity form." },
{ status: 500 }
);
}
}
