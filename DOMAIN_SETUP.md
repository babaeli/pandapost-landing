# Connect pandapost.co.ke to Vercel

## ✅ Domains Added to Vercel

Your domains have been successfully added to Vercel:
- ✅ `pandapost.co.ke` (root domain)
- ✅ `www.pandapost.co.ke` (www subdomain)

## 🔧 DNS Configuration Required

You need to add DNS records at your domain registrar (where you bought pandapost.co.ke).

### Where to Make Changes

Log in to your domain registrar's control panel. Common registrars in Kenya:
- **Truehost** (truehost.co.ke)
- **Kenya Web Experts**
- **Safaricom Business**
- **HostPinnacle**
- Or wherever you registered pandapost.co.ke

Look for:
- "DNS Settings"
- "DNS Management"
- "Nameservers"
- "Domain Settings"

---

## 📋 DNS Records to Add

### Option A: Using A Records (Recommended - Simpler)

Add these **2 records** in your DNS settings:

#### 1. Root Domain (pandapost.co.ke)
```
Type: A
Name: @ (or leave blank, or pandapost.co.ke)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

#### 2. WWW Subdomain (www.pandapost.co.ke)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

---

## 📋 Option B: Using Nameservers (Advanced - Vercel manages everything)

If you prefer Vercel to manage all DNS, change your nameservers to:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Warning**: This will move ALL DNS management to Vercel. Use Option A if you have other services (email, etc.) using this domain.

---

## 🎯 Step-by-Step Instructions

### For Most Registrars:

1. **Log in** to your domain registrar account

2. **Find DNS Settings**
   - Look for "DNS Management" or "DNS Settings"
   - May be under "Domain Management" or "Advanced Settings"

3. **Add A Record** (for root domain)
   - Click "Add Record" or "Add DNS Record"
   - Type: `A`
   - Host/Name: `@` or leave blank
   - Points to/Value: `76.76.21.21`
   - TTL: `3600` or `Auto`
   - Click Save

4. **Add CNAME Record** (for www)
   - Click "Add Record" again
   - Type: `CNAME`
   - Host/Name: `www`
   - Points to/Value: `cname.vercel-dns.com`
   - TTL: `3600` or `Auto`
   - Click Save

5. **Wait for Propagation**
   - DNS changes take 5 minutes to 48 hours
   - Usually works within 15-30 minutes
   - Check status at: https://dnschecker.org/#A/pandapost.co.ke

---

## 🔍 Current DNS Status

Your domain currently points to:
- Nameservers: `rs51.rcnoc.com` and `rs52.rcnoc.com`

These need to be updated with the A record and CNAME as shown above.

---

## ✅ Verification

After adding DNS records, verify they're working:

### Check via Command Line
```bash
# Check root domain
nslookup pandapost.co.ke

# Should show: 76.76.21.21

# Check www subdomain
nslookup www.pandapost.co.ke

# Should show: cname.vercel-dns.com
```

### Check via Online Tool
Visit: https://dnschecker.org/#A/pandapost.co.ke

It should show `76.76.21.21` in multiple locations worldwide.

---

## 📧 Email Setup (Important!)

If you plan to use email with `@pandapost.co.ke`, make sure to add your email provider's MX records BEFORE changing nameservers.

Common email providers require these records:
- **Google Workspace**: MX records pointing to Google
- **Microsoft 365**: MX records pointing to Microsoft
- **Other providers**: Check their documentation

⚠️ **If using Option B (nameservers)**, configure email DNS in Vercel dashboard after switching.

---

## ⏱️ Timeline

| Action | Time |
|--------|------|
| Add DNS records | 2 minutes |
| DNS propagation starts | Immediate |
| Changes visible (some locations) | 5-15 minutes |
| Fully propagated worldwide | 1-48 hours |
| SSL certificate issued | Automatic after DNS verifies |

---

## 🔐 SSL Certificate

Once DNS is configured, Vercel will automatically:
1. Detect the DNS records
2. Issue a free SSL certificate
3. Enable HTTPS for your domain
4. Redirect HTTP to HTTPS

No action needed on your part!

---

## 🎯 What Happens Next

### Immediate (after DNS setup)
1. ✅ `pandapost.co.ke` → Your landing page
2. ✅ `www.pandapost.co.ke` → Your landing page
3. ✅ HTTPS enabled automatically
4. ✅ Both URLs work

### Vercel Will Email You
You'll receive confirmation when:
- DNS verification completes
- SSL certificate is issued
- Domain is fully configured

---

## 🔧 Testing Before DNS Propagates

Want to test before DNS is fully live? Add this to your hosts file:

**Windows**: `C:\Windows\System32\drivers\etc\hosts`
**Mac/Linux**: `/etc/hosts`

Add line:
```
76.76.21.21 pandapost.co.ke www.pandapost.co.ke
```

Then visit http://pandapost.co.ke in your browser.

---

## 📊 Check Status Anytime

### Via Vercel Dashboard
https://vercel.com/dickys-projects-d9f84e49/pandapost/settings/domains

### Via CLI
```bash
vercel domains inspect pandapost.co.ke
```

### Via Browser
Just visit: https://pandapost.co.ke

---

## 🆘 Troubleshooting

### "Domain not found" or "This site can't be reached"
- DNS hasn't propagated yet - wait 15-30 minutes
- Check DNS records are correct
- Verify with: https://dnschecker.org/#A/pandapost.co.ke

### SSL/HTTPS not working
- DNS must verify first (check Vercel dashboard)
- SSL certificate issues automatically after DNS
- Can take 10-15 minutes after DNS verification

### "www" works but root doesn't (or vice versa)
- Make sure BOTH records are added (A and CNAME)
- Check each separately with nslookup

### Still using old site
- Clear browser cache (Ctrl+Shift+R)
- Try incognito/private window
- DNS may still be propagating

---

## 📞 Support

### Vercel Support
- Dashboard: https://vercel.com/support
- Docs: https://vercel.com/docs/concepts/projects/domains

### DNS Checker Tools
- https://dnschecker.org
- https://www.whatsmydns.net
- https://mxtoolbox.com/SuperTool.aspx

### Your Registrar
Contact where you bought pandapost.co.ke if you need help finding DNS settings.

---

## ✨ Summary

**What you need to do:**
1. Log in to your domain registrar
2. Go to DNS settings
3. Add A record: `@ → 76.76.21.21`
4. Add CNAME record: `www → cname.vercel-dns.com`
5. Save and wait 15-30 minutes

**What happens automatically:**
1. Vercel detects DNS
2. Issues SSL certificate
3. Enables HTTPS
4. Your site goes live at pandapost.co.ke

---

## 🎉 Once Complete

Your landing page will be live at:
- ✅ https://pandapost.co.ke
- ✅ https://www.pandapost.co.ke
- ✅ https://pandapost.vercel.app (still works as backup)

All with:
- 🔒 HTTPS/SSL enabled
- 🌍 Global CDN
- ⚡ Fast loading
- 📧 Form submissions to flynnduerrel@gmail.com

---

**Need help?** Let me know if you run into any issues with your DNS provider!
