import { useNavigate } from "react-router-dom";

function CharacterCard({ character }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/chat/${character.id}`);
    };

    return (
        <div onClick={handleClick}>
            <img src={character.image} alt={character.name} width="120" />
            <p>{character.name}</p>
        </div>
    );
}

export default CharacterCard;