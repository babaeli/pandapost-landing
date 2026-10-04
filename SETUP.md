# PandaPost Landing Page - Setup Guide

## 📋 Before Deploying to Vercel

You need to configure two things:

### 1. Create Formspree Form

1. Go to: https://formspree.io
2. Sign up with your email
3. Click "Create a new form"
4. Name it: "PandaPost Demo Requests"
5. Copy your form endpoint (looks like: `https://formspree.io/f/xxxxxxxx`)

### 2. Update Form Configuration

Open `index.html` and find line ~415:

**Replace:**
```html
<form class="demo-form" id="demoForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
```

**With:**
```html
<form class="demo-form" id="demoForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Update Success Redirect

On line ~443, replace:
```html
<input type="hidden" name="_next" value="YOUR_SITE_URL/?success=true">
```

**With your actual Vercel URL:**
```html
<input type="hidden" name="_next" value="https://YOUR-PROJECT.vercel.app/?success=true">
```

Or if using custom domain:
```html
<input type="hidden" name="_next" value="https://pandapost.co.ke/?success=true">
```

---

## 🚀 Deploy to Vercel

### First Time Setup

1. **Install Vercel CLI** (if not already):
```bash
npm install -g vercel
```

2. **Login to your NEW Vercel account**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd "c:\Users\flynn\Desktop\Pandapost"
vercel --prod
```

### Connect Custom Domain (Optional)

After deployment, if you want to use `pandapost.co.ke`:

```bash
vercel domains add pandapost.co.ke
vercel domains add www.pandapost.co.ke YOUR-PROJECT-NAME
```

Then add DNS records at your registrar:
- **A record**: `@ → 76.76.21.21`
- **CNAME record**: `www → cname.vercel-dns.com`

---

## ✅ Post-Deployment Checklist

1. [ ] Formspree endpoint updated in index.html
2. [ ] Success redirect URL updated in index.html
3. [ ] Test the demo form (submit and check email)
4. [ ] Verify Formspree email (check inbox for verification)
5. [ ] Update social media links (Instagram, TikTok)
6. [ ] Test on mobile and desktop
7. [ ] Push changes to GitHub

---

## 🔄 Quick Deployment

Once configured, future deployments are simple:

```bash
# Make your changes
git add .
git commit -m "Your update"
git push

# Redeploy to Vercel
vercel --prod
```

---

## 📧 Form Submissions

All demo requests will be sent to the email you configured in Formspree.

**First submission**: You'll need to verify your email with Formspree.

---

## 🆘 Need Help?

- **Formspree Docs**: https://help.formspree.io
- **Vercel Docs**: https://vercel.com/docs
- **Your Local Files**: `c:\Users\flynn\Desktop\Pandapost`

---

**Remember**: Update `YOUR_FORMSPREE_ENDPOINT` and `YOUR_SITE_URL` in `index.html` before deploying!
