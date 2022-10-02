import Image from "../assets/signup-img.svg";

const SignImage = () => {
  return (
    <>
      <div className="right_data mt-5" style={{ width: "100%" }}>
        <div className="sign_img mt-5">
          <img src={Image} style={{ maxWidth: 480 }} />
        </div>
      </div>
    </>
  );
};

export default SignImage;
