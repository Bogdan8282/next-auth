import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/public/google.svg";
import Image from "next/image";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
        <Image src={GoogleIcon} alt="Google" width={18} height={18} />
        Продовжити з Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };
