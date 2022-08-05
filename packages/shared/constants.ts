export const SECRET_TOKEN = process.env.SECRET_TOKEN;
export const MAX_AGE = 60 * 60 * 12;
export const TOKEN_NAME = "x-token";

export const COOKIE_OPTIONS = {
  maxAge: MAX_AGE,
  expires: new Date(Date.now() + MAX_AGE * 1000),
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  sameSite: "lax",
};

export const IS_PROD = process.env.NODE_ENV === "production";

export const IS_DEV = process.env.NODE_ENV !== "production";

// dev only

const frontEndUrlSwitch = (key?: string) => {
  switch (key) {
    case "apollo":
      return "https://studio.apollographql.com";
    default:
      return "http://localhost:3000";
  }
};

export const FRONTEND_URL = IS_DEV
  ? frontEndUrlSwitch("apollooo")
  : "https://issuestracker.vercel.app";

export const GRAPHQL_API_URL = IS_DEV
  ? "http://localhost:3001/api/graphql"
  : "https://issuestracker-api.vercel.app/api/graphql";

// space
export const PUB_KEY = `-----BEGIN RSA PUBLIC KEY-----
MIICCgKCAgEAvvCivAVuwFNx4I6pz6YrVR4qDoO1sMgUc2x+ygukNmj/9tFNtQAl
soMe0W/cIuzQx0pCIwxLzMdoBsUdxEVR1YlC0W/IzGux6DzK/Xl6H6/o7wLtELPx
S523ytdB+LzZqq9mIZBu+itnMrDNuQPhcwXotLwAznN3Q5cSirm+okDk8Ifwcl9q
PtmrfOCYAKs+1j/xoApwImBzF/n4VU24RO8b7fLPGfkvKD5f1w8oEuy9Rvx++ozE
lWj/tPd5XxVOc39Y2+yPzlY029HEI7Q2vvqorMWEj3fec2Q6BP1mr1biD/h9jUne
BfPLU8loQwuqGjeH1q28GsN7qttz6Akea9rKQBb+UCkcKwr8gX5l3ivMvyJmp6cH
YKwmunIz47VU1bz9nSA2KZJji7GXWI25hdKxsqdesEnPRvCHPsA/NbVDBoRQ7+yY
CEywYuSScds+a9x6uKuMKpxKNJd5zxR3fEAqIX1TV2bXW3ggXd106Sll42jzTHnJ
xXeHUOtc+Xv4Tfq9GsreB+P8u5Q9BIRSlOzBs1ymFX1I5fXC+ruezf40kywBi5AO
kztFF3s2un8KGxom6pG31uMPguVSyQ1QUhp+22GOzjn8vU9PJCyeyvM0eB6jJgK+
QtJIFwicsSqqmaW1ksUhIJqgODCdCyDCrP1hozegAnmbDoj67WO5ZGMCAwEAAQ==
-----END RSA PUBLIC KEY-----`;

export const PRIV_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIJKQIBAAKCAgEAvvCivAVuwFNx4I6pz6YrVR4qDoO1sMgUc2x+ygukNmj/9tFN
tQAlsoMe0W/cIuzQx0pCIwxLzMdoBsUdxEVR1YlC0W/IzGux6DzK/Xl6H6/o7wLt
ELPxS523ytdB+LzZqq9mIZBu+itnMrDNuQPhcwXotLwAznN3Q5cSirm+okDk8Ifw
cl9qPtmrfOCYAKs+1j/xoApwImBzF/n4VU24RO8b7fLPGfkvKD5f1w8oEuy9Rvx+
+ozElWj/tPd5XxVOc39Y2+yPzlY029HEI7Q2vvqorMWEj3fec2Q6BP1mr1biD/h9
jUneBfPLU8loQwuqGjeH1q28GsN7qttz6Akea9rKQBb+UCkcKwr8gX5l3ivMvyJm
p6cHYKwmunIz47VU1bz9nSA2KZJji7GXWI25hdKxsqdesEnPRvCHPsA/NbVDBoRQ
7+yYCEywYuSScds+a9x6uKuMKpxKNJd5zxR3fEAqIX1TV2bXW3ggXd106Sll42jz
THnJxXeHUOtc+Xv4Tfq9GsreB+P8u5Q9BIRSlOzBs1ymFX1I5fXC+ruezf40kywB
i5AOkztFF3s2un8KGxom6pG31uMPguVSyQ1QUhp+22GOzjn8vU9PJCyeyvM0eB6j
JgK+QtJIFwicsSqqmaW1ksUhIJqgODCdCyDCrP1hozegAnmbDoj67WO5ZGMCAwEA
AQKCAgBUs0p9PauzhVCu3JpXks8GIytk5OhkU10/FpHn7uIZgNqLEq317OrMFX5G
SejNVWAIB9ju0zWM0ahD2I0r09RJdWo+neflRqDU9KLXblvOUqpx3EptbmVLtdsi
D/sj7CJipQwZN4kDUN2mjuezexU3gReJlRyGeJIfWZTQFTWLpF3qlWMEWW84EjcQ
XlEPeueVAyicZgT4OvDTYf/XV3K2oZsyItPcIb3ZjFHXhNGyE3KjWr65RliuLrXA
AUfF9h2m/obciEQCtBseqB7p97eRYIASpEv5mKMFbSCPthknDtOZYhHP60SiP1Oj
B2VI2JPMrXWEte0LskvZrx/rfqAPU3iCuQI5A+QJK5s3e5FPkrUmVRZprR6C9rmc
wjFHnPn/xQbEStENxh26K8zGGI8HHq+TeKKi0C4e+2CWbl2svYiZAY4Ov1VejGJs
3uw8jlOF9ymgtXMV+katcPkSr8X/BJKV+Ohvs8sfpzak0WHRuuj62WPBRd+5Cpfl
Z74hVCQfaMULHaC+YcrkqBimtGBph0gr/1HL5NmsaUEdLhBVGVQcSiJygDDlOopE
vMFXaNepW2+OXQHVDHdJdk/EAMmM/BXj10/xOzrSTDLHB0I4m+hdaC0h5+QokjWE
NWSI0O/ccVKau6jUszCPWdjAuooJ5xjutrurUEhHAAwalPEDgQKCAQEA7nL3clxq
7dIRJu4qB5OD3F+sv4u1GDm7lJv8PxvfHiqGKM8p9GcIc01xY184n7jFPncitQi5
okIAc+pUCGAiNrQV4+W5B7L+qsNV9TsklItfxH9O/YiHLrPYEkU3VVK0mXGA22ke
lLNCbVP/kHJlBnmw88E6IcSC+VQatAY0LNsfRG1W0Secv8tyFyF7jF/Y+CNvt7fs
+jzVW4opBD9wuKmlmMryp6M4pHM1jqqYmQXgaNpI5Y6jVmRDwAuvugoQcgYignac
QR1mvRLgNVGvdS0YXr/YcaYLKwE4zLPW/ZMPHzTRxajjkwfWm97KyJomf8nxNzhy
4Q8QgwL4fMyNNQKCAQEAzP53sABGZJi+mKPw+eoQur5tc+6K1J0JXFPDuzZdOgWR
GhydkMgCWAvQrR53PEslVi1wvL5DamWNIXW7q2/QnPGluUteyhbKf2YiwuFGR4tH
LI5LHUj/UAeR/eRkqn8+MFuv43GK/m0wsP6znEX5z0eVw/dd6vYxotLXikr/MgrV
1kE4L/4GzeKc3sTls42XrbwauEB7KB9/LTGTuzLQk6gLCW6zp3A8wqQ9cRKlru+j
xTo6tgWJpjPb+qWv7vsuTmqiNmn6XMyfEY6EjABSmO42mr2YniTkwMuIDZ7CUTmE
4RrIewAOAcW51BKxc4mPf2Yw8qWJAnc3kx1XGCKWNwKCAQAuBaB+wRmeRyIqWmNg
TPdxTEICQku0nkf3Gdgosg9xOhHkxH87fbtizbqpzFIYecgQE1xuhn2VtJlzxfFs
IGnaFw32i3sX4lNG0CbCCyU3SmM0gMHVK0m0GOAGPre8TxcuWnrdXj+ZwbN7eG/m
CD45brlZgpzesZf52WLCBkSBt9UkFtpfyf52AiVGE59N653r3qMMWYJyldU0MslR
2ZC/A3dDsz/8XQNsshPPMlv7hOfYNPFG5S3fWcC9y0Oia5ja+RYmChCEfNE8gu0l
PVvZCNggSXTUEpErPrQgxkEjdgPAKSintr4dvbCNKwYGi8IMfgSBfPKnP4oXTzZ4
l95VAoIBAQCCa+P6NjKTDhs1Qhiu6Bx8s2svtzTc0IyEEUcWdSAbKi+HTW1yD85t
9hZuDlQOKEE48vAnJWX+610/TIh6KkmvkI6/tRQ5vwZWx8SV+H2eRx6hWmav2yGU
6TwZLJZfY1VNrwfYzQSBmza/ZU0gv+SP3BuM8nTuaHRsA3jeo5h5XituhVAaOKRb
mTH1CZCbDBrUjjjxwRSaEm/3cPNsxoetadybw7LJdL8zlwsARbzj79NiSAnShPNu
qs/qSEAG7AgqG+3YcNS49fa+VM4/xHTIl8Zl7PqMoyxm/Rcyky9OPiosjb2/g+ll
d0cjhkEgIQULKRk7R9ZDm1XgY2pmEJtBAoIBAQDVD+t7+6mSLcfjfggtuT4+Wk4o
sjRLgnPSVUOuJiBDx2Ar4mf9HYiCINrtjK2nL9WWopsPZBBd7sxG9T5x5B1AQgAC
uu+FXKfK76Qi5DZ013+2CdgerrPHJnemolqoaclMzUlCasymjRxoH44aOean5PZB
x4Fbeg7RnGwXrEeNtccFsT7tk1HhAaEBGQasZcabDBN8tMPElBVtjlF8XsLBbYwV
wrPPKfEjn5d2RexsZNgkcYbPX0dcObNzZUI1VzA469BjACOLyyFaidM2gWf5+6Fi
SVddNpNEoA3JzD3M9PBQlr83WuVdGVg5TVj69mLyp1WuzjURwD4mvFVBab4l
-----END RSA PRIVATE KEY-----`;
