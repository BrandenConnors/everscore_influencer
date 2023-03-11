export function SocialLinks(props: any) {
  return (
    <div className="col-span-12 h-auto rounded-lg bg-gray-300 p-2">
      <div className="flex mx-auto md:px-20 gap-2">
        <div className="w-16 mx-auto">
          <a href="http://www.facebook.com/">
            <img className="" src="/images/icons/facebook.png" alt="facebook" />
          </a>
        </div>

        <div className="w-16 mx-auto">
          <a href="http://www.twitter.com/">
            <img className="" src="/images/icons/twitter.png" alt="twitter" />
          </a>
        </div>

        <div className="w-16 mx-auto">
          <a href="http://www.instagram.com/">
            <img
              className=""
              src="/images/icons/instagram.png"
              alt="instagram"
            />
          </a>
        </div>

        <div className="w-16 mx-auto">
          <a href="http://www.tiktok.com/">
            <img className="" src="/images/icons/tiktok.png" alt="tiktok" />
          </a>
        </div>

        <div className="w-16 mx-auto">
          <a href="http://www.linkedin.com/">
            <img className="" src="/images/icons/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
