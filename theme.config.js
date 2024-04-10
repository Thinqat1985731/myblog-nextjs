const YEAR = new Date().getFullYear();
import { ImGithub, ImRss } from "react-icons/im";

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Thinqat
        <a href="https://github.com/Thinqat1985731"><ImGithub size="25px"/></a>
        <a href="/feed.xml"><ImRss size="25px"/></a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
          padding : 5px ;
        }
      `}</style>
    </footer>
  ),
};
