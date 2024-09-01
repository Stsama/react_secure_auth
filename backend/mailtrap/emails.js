import { mailtrapClient, sender } from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verifaction"
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "6052567e-bbed-49ec-b520-47dbe389be6c",
            template_variables: {
                "company_info_name": "React_Secure_App",
                name: name,
            },
        });
        console.log("Welcome Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        });
        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Password Success",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        });
        console.log("Password reset success email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}