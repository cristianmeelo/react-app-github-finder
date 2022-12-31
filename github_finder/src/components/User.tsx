import { Link } from "react-router-dom";
import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => (
  <div>
    <img src={avatar_url} alt={login} />
    <h2>{login}</h2>
    <p>
      <MdLocationPin />
    </p>
    <div>
        <div>
            <p>Seguidores:</p>
            <p>{followers}</p>
        </div>
        <div> 
            <p>Seguindo:</p>
            <p>{following}</p>
        </div>
    </div>
    <Link to={`/repos/${login}`}>
        Ver melhores projetos
    </Link>
  </div>
);
