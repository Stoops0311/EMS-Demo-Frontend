# Contact Form Setup Guide

The contact form uses [Web3Forms](https://web3forms.com) - a free, privacy-focused form handling service.

## Quick Setup (5 minutes)

### 1. Get Your Free API Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address where you want to receive form submissions
3. Click "Get Access Key"
4. Check your email for your access key

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and replace `your_access_key_here` with your actual access key:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abc123-your-actual-key-here
   ```

3. Restart your development server:
   ```bash
   pnpm dev
   ```

### 3. Test the Form

1. Open your website in the browser
2. Click the "Contact Us" button in the header
3. Fill out the form and submit
4. Check your email for the submission

## Features

- **Free Forever**: 250 submissions/month on free tier
- **No Backend Required**: Forms submit directly to Web3Forms API
- **Email Notifications**: Get instant emails when someone submits the form
- **Privacy-Focused**: No tracking, no ads, GDPR compliant
- **Spam Protection**: Built-in spam filtering
- **Custom Reply-To**: Responses go directly to the sender's email

## Advanced Configuration

You can customize the form behavior in `components/contact-form.tsx`:

```typescript
body: JSON.stringify({
  access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  from_name: "EMS Contact Form", // Change this to your site name

  // Optional: Add custom fields
  // company: formData.company,

  // Optional: Redirect after submission
  // redirect: "https://yourdomain.com/thank-you"
})
```

## Troubleshooting

### Form submissions not arriving?

1. Check your spam/junk folder
2. Verify your access key is correct in `.env.local`
3. Make sure you restarted the dev server after adding the key
4. Check the browser console for any errors

### Want to use a different email service?

You can easily swap out Web3Forms for alternatives like:
- **Formspree** - [formspree.io](https://formspree.io)
- **FormSubmit** - [formsubmit.co](https://formsubmit.co)
- **EmailJS** - [emailjs.com](https://www.emailjs.com)

Just update the `handleSubmit` function in `components/contact-form.tsx`.

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variable in your hosting platform's dashboard
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your access key
3. Redeploy your site

### Vercel
```bash
vercel env add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
```

### Environment Variables Panel
Most hosting platforms have an "Environment Variables" section where you can add:
- **Key**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- **Value**: Your access key

## Security Notes

- The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser
- This is safe because Web3Forms requires the access key to be public
- The access key only allows sending emails to YOUR registered email address
- No one can change the destination email or access your account with just the key

## Support

- **Web3Forms Docs**: [https://docs.web3forms.com](https://docs.web3forms.com)
- **EMS Issues**: [GitHub Issues](https://github.com/Stoops0311/EMS-Demo-Frontend/issues)
