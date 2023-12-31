import { JWTToken } from "@/app/api/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import bookmark from "../../../public/images/footer/bookmark.svg";
import unactiveHome from "../../../public/images/footer/home-unactive.svg";
import unactivePost from "../../../public/images/footer/post-unactive.svg";
import unactiveSearch from "../../../public/images/footer/search-unactive.svg";
import logo from "../../../public/logo-sem-fundo.png";
import styles from "../../../styles/DefaultComponents/footer.module.scss";
import DesktopUserProfilePic from "./DesktopUserProfilePic";
import UserProfilePic from "./UserProfilePic";
export default async function Footer() {
  const token = cookies().get("user_token")?.value;
  const decodedToken: JWTToken = jwtDecode(token ?? "");
  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className={styles.logo}
      />
      {/* <div>
        
      </div> */}
      <DesktopUserProfilePic
        image={decodedToken.profilePic}
        userId={decodedToken.sub}
        userName={decodedToken.name}
      />
      <Link href="/homepage">
        <Image
          src={unactiveHome}
          width={25}
          height={25}
          quality={100}
          alt="home"
        />
        <span className={styles.topicName}>Homepage</span>
      </Link>
      <Link href="/search">
        <Image
          src={unactiveSearch}
          width={25}
          height={25}
          quality={100}
          alt="search"
        />
        <span className={styles.topicName}>Pesquisar</span>
      </Link>
      <Link href="/article/new">
        <Image
          src={unactivePost}
          width={25}
          height={25}
          quality={100}
          alt="post"
        />
        <span className={styles.topicName}>Adic. artigo</span>
      </Link>
      <Link href="/reading-techniques">
        <Image
          src={bookmark}
          width={25}
          height={25}
          quality={100}
          alt="reading-techniques"
        />
        <span className={styles.topicName}>Téc. de Leitura</span>
      </Link>
      <UserProfilePic
        image={decodedToken.profilePic}
        userId={decodedToken.sub}
        userName={decodedToken.name}
      />
    </footer>
  );
}
