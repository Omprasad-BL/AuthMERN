import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
// export const sendVerificationEmail = async (email, verifcationToken) => {
//   const recipient = [{ email }];
//   try {
//     const response = await mailtrapClient.send({
//       from: sender,
//       to: recipient,
//       subject: "Verify your email",
//       html: `<h1>Hello verification email</h1>`,
//       category:"Email verification"
//     });
//     console.log("Email sent successfully",response);
//   } catch (error) {
//     console.error(`error sending verification email`, error);

//     throw new Error(`error sending email ${error}`);
//   }
// };

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};