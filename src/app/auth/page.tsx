import { auth } from "@/lib/auth";

import { GoogleSignIn } from "@/components/google-sign-in";
import { GitHubSignIn } from "@/components/github-sign-in";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Вхід</h1>
      <h4 className="text-lg font-medium text-center">Оберіть метод авторизації:</h4>
      <GoogleSignIn />
      <GitHubSignIn />
    </div>
  );
};

export default Page;
