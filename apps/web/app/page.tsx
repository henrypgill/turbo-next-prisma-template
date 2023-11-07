import Home from "./home/Home";


export default function Page({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Home />
  );
}