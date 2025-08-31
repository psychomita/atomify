"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { authClient } from "@/lib/auth/client";
import {
  Atom,
  BookOpen,
  Clock,
  FlaskConical,
  Microscope,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const disciplines = [
  {
    name: "Physics",
    icon: Atom,
    progress: 0,
    color: "from-amber-500 to-amber-600",
    darkColor: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-700 dark:text-amber-400",
    completedLabs: 0,
    totalLabs: 5,
    link: "/student/simulations/phy",
  },
  {
    name: "Chemistry",
    icon: FlaskConical,
    progress: 0,
    color: "from-emerald-500 to-emerald-600",
    darkColor: "from-emerald-400 to-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-700 dark:text-emerald-400",
    completedLabs: 0,
    totalLabs: 5,
    link: "/student/simulations/chem",
  },
  {
    name: "Biology",
    icon: Microscope,
    progress: 0,
    color: "from-rose-500 to-rose-600",
    darkColor: "from-rose-400 to-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-700 dark:text-rose-400",
    completedLabs: 0,
    totalLabs: 3,
    link: "/student/simulations/bio",
  },
];

const recentAssignments = [
  {
    title: "Quantum Mechanics Problem Set",
    subject: "Physics",
    dueDate: "Due in 2 days",
    status: "pending",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Organic Chemistry Lab Report",
    subject: "Chemistry",
    dueDate: "Due in 5 days",
    status: "in-progress",
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Genetics Case Study",
    subject: "Biology",
    dueDate: "Due in 1 week",
    status: "not-started",
    color: "text-purple-600 dark:text-purple-400",
  },
];

export default function DashboardPage() {
  const { theme } = useTheme();
  const session = authClient.useSession();

  return (
    <div className="p-6 space-y-6 bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {session?.data?.user?.name || "Student"}!
          </h1>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white border-0 rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 dark:text-blue-200 text-sm">
                  Total Labs
                </p>
                <p className="text-2xl font-bold">19</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-200 dark:text-blue-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 text-white border-0 rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 dark:text-green-200 text-sm">
                  Completed
                </p>
                <p className="text-2xl font-bold">19</p>
              </div>
              <Trophy className="h-8 w-8 text-green-200 dark:text-green-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white border-0 rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 dark:text-purple-200 text-sm">
                  Average Score
                </p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200 dark:text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500 text-white border-0 rounded-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 dark:text-yellow-200 text-sm">
                  Assignments
                </p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-200 dark:text-yellow-300" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Discipline Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {disciplines.map((discipline) => (
          <Card
            key={discipline.name}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className={`${discipline.bgColor} rounded-t-lg`}>
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${
                    theme === "dark" ? discipline.darkColor : discipline.color
                  }`}
                >
                  <discipline.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className={discipline.textColor}>
                    {discipline.name}
                  </CardTitle>
                  <CardDescription className="dark:text-muted-foreground">
                    {discipline.completedLabs}/{discipline.totalLabs} labs
                    completed
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2 text-muted-foreground">
                  <span>Progress</span>
                  <span className="font-medium">{discipline.progress}%</span>
                </div>
                <Progress value={discipline.progress} className="h-2" />
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Recent Activity:</p>
              </div>

              <Link href={`${discipline.link}`} className="w-full">
                <Button
                  className={`w-full bg-gradient-to-r ${
                    theme === "dark" ? discipline.darkColor : discipline.color
                  } hover:opacity-90 text-white`}
                >
                  Continue Learning
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Assignments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Recent Assignments
          </CardTitle>
          <CardDescription>
            Keep track of your upcoming deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAssignments.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{assignment.title}</h4>
                  <p className={`text-sm ${assignment.color}`}>
                    {assignment.subject}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {assignment.dueDate}
                  </span>
                  <Badge
                    variant={
                      assignment.status === "pending"
                        ? "destructive"
                        : assignment.status === "in-progress"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {assignment.status === "pending"
                      ? "Urgent"
                      : assignment.status === "in-progress"
                      ? "In Progress"
                      : "Not Started"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
