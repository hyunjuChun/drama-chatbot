import { characters } from "../data/characters";
import CharacterCard from "../components/CharacterCard";

function CharacterSelect() {
    return (
        <div>
            <h1>캐릭터 선택</h1>

            {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
}

export default CharacterSelect;