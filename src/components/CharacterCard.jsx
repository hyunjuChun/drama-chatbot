import { useNavigate } from "react-router-dom";

function CharacterCard({cht}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/chat/${cht.id}`);
    };

    return (
        <button onClick={handleClick}>
            <span>{cht.name}</span>
        </button>
    );
}

export default CharacterCard;