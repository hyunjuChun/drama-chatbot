import { chts } from "../data/Characters";
import CharacterCard from "../components/CharacterCard";

function CharacterSelect() {
    return (
        <div className="wrap">
            <div className="content">
            <p>등장인물 추가 테스트용</p>

                <div className="btn-wrap">
                    {chts.map((cht) => (
                        <CharacterCard key={cht.name} cht={cht} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default CharacterSelect;