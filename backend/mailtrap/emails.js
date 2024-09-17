import { mailtrapClient, sender } from "./mailtrap.config.js";
import sendMail from "./nodemailer.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, WELCOME_EMAIL } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    try {

        await sendMail(email, 'Verify your email', VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),)


        // const response = await mailtrapClient.send({
        //     from: sender,
        //     to: recipient,
        //     subject: "Verify your email",
        //     html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        //     category: "Email Verifaction"
        // });
        // console.log("Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    try {


        await sendMail(email, 'Welcome Email', WELCOME_EMAIL)

        // const response = await mailtrapClient.send({
        //     from: sender,
        //     to: recipient,
        //     template_uuid: "6052567e-bbed-49ec-b520-47dbe389be6c",
        //     template_variables: {
        //         "company_info_name": "React_Secure_App",
        //         name: name,
        //     },
        // });
        // console.log("Welcome Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    try {

        await sendMail(email, 'Reset your password', PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),)



        // const response = await mailtrapClient.send({
        //     from: sender,
        //     to: recipient,
        //     subject: "Reset your password",
        //     html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        //     category: "Password Reset"
        // });
        // console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

export const sendResetSuccessEmail = async (email) => {
    try {

        await sendMail(email, 'Reset Password Success', PASSWORD_RESET_SUCCESS_TEMPLATE)
        // const response = await mailtrapClient.send({
        //     from: sender,
        //     to: recipient,
        //     subject: "Reset Password Success",
        //     html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        //     category: "Password Reset"
        // });
        // console.log("Password reset success email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
}