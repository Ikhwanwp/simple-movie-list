import { Typography } from "@material-tailwind/react";
function FooterSection() {
  return (
    <footer className="flex w-full items-center justify-center border-t border-blue-gray-50 py-6 text-center mt-10">
      <Typography
        color="blue-gray"
        className="font-normal">
        &copy; 2024 IWP
      </Typography>
    </footer>
  );
}

export default FooterSection;
