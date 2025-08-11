import { redirect } from "next/navigation";
import { JSX } from "react";

const Page = (): JSX.Element => {
  redirect("/brand");
  // return <h1>Hello World</h1>;
};

export default Page;
