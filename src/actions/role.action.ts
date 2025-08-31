"use server";

import prisma from "@/lib/prisma";
import { UserRole } from "@prisma/client";

export async function updateUserRole(userId: string, role: UserRole) {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
    });
    return user;
  } catch (error) {
    console.error("Error updating user role:", error);
    throw new Error("Failed to update user role.");
  }
}
