import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail) {
      return res.status(500).json({ message: "Admin not configured" });
    }

    const emailMatches = email === adminEmail;
    let passwordMatches = false;

    if (adminPasswordHash) {
      passwordMatches = await bcrypt.compare(password, adminPasswordHash);
    } else if (adminPassword) {
      passwordMatches = password === adminPassword;
    }

    if (!emailMatches || !passwordMatches) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
