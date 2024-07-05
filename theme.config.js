const YEAR = new Date().getFullYear();
import { SiGithub, SiHuggingface, SiRss } from '@icons-pack/react-simple-icons';

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Thinqat
        <a href="https://huggingface.co/Thinqat1985731"><SiHuggingface size="27px"/></a>
        <a href="https://github.com/Thinqat1985731"><SiGithub size="25px"/></a>
        <a href="/feed.xml"><SiRss size="25px"/></a>
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
