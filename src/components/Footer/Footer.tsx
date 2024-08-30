export function Footer() {
  return (
    <footer className="md:px-8 flex justify-between bg-[#0C1140] h-[120px] text-white px-8 py-6 items-center">
      <div className="flex flex-row gap-4 w-[320px]">Social</div>
      <div className="flex flex-row justify-center items-center">
        <div></div>
        <span>Copyright © 2024 Dyan</span>
      </div>
      <div className="flex flex-row gap-4 w-[320px]">
        <div>Term of service</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
}
