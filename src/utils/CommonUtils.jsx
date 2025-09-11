const modules = import.meta.glob("../assets/*.png", { eager: true });


export const IMAGES = {};
for (const path in modules) {
  const name = path.split("/").pop().replace(".png", "");
  IMAGES[name] = modules[path].default;
}

export function getGamesByGenre(genre, games) {
   return games.filter(game => game.genre.includes(genre));
}

export const GENRES = {
    saveTheWorld: 'saveTheWorld',
    adventure: 'adventure',
    sports: 'sports',
    building: 'building',
    raising: 'raising',
    multiplayer: 'multiplayer',
    puzzle: 'puzzle',
    party: 'party'
}

export const IMG_GENRE = {
    saveTheWorld: IMAGES['sword'],
    adventure: IMAGES['magic'],
    sports: IMAGES['trophy'],
    building: IMAGES['hammer'],
    raising: IMAGES['egg'],
    multiplayer: IMAGES['medal'],
    puzzle: IMAGES['magnifying'],
    party: IMAGES['cracker']
}

export const GENRE_MESSAGES = (selection) => {
  const messages = {
    [GENRES.saveTheWorld]: (
      <span>
        <ruby>敵<rt>てき</rt></ruby>をやっつけて
        <ruby>平和<rt>へいわ</rt></ruby>を
        <ruby>守<rt>まも</rt></ruby>ろう！
      </span>
    ),
    [GENRES.adventure]: (
      <span>
        <ruby>仲間<rt>なかま</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に
        <ruby>大冒険<rt>だいぼうけん</rt></ruby>しよう！
      </span>
    ),
    [GENRES.building]: (
      <span>
        <ruby>家<rt>いえ</rt></ruby>や<ruby>町<rt>まち</rt></ruby>をつくって
        <ruby>夢<rt>ゆめ</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>をひろげよう！
      </span>
    ),
    [GENRES.raising]: (
      <span>
        <ruby>動物<rt>どうぶつ</rt></ruby>や<ruby>モンスター<rt>もんすたー</rt></ruby>を
        <ruby>育て<rt>そだて</rt></ruby>て<ruby>一緒<rt>いっしょ</rt></ruby>にくらそう！
      </span>
    ),
    [GENRES.puzzle]: (
      <span>
        <ruby>パズル<rt>ぱずる</rt></ruby>を<ruby>解い<rt>とい</rt></ruby>たり
        <ruby>楽<rt>たの</rt></ruby>しく<ruby>学<rt>まな</rt></ruby>ぼう！
      </span>
    ),
    [GENRES.multiplayer]: (
      <span>
        <ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>やともだちと
        <ruby>戦<rt>たた</rt></ruby>かって1<ruby>位<rt>い</rt></ruby>をめざそう！
      </span>
    ),
    [GENRES.sports]: (
      <span>
        <ruby>色<rt>いろ</rt></ruby>んな<ruby>スポーツ<rt>すぽーつ</rt></ruby>で
        <ruby>活躍<rt>かつやく</rt></ruby>しよう！
      </span>
    ),
    [GENRES.party]: (
      <span>
        <ruby>パーティーゲーム<rt>ぱーてぃーげーむ</rt></ruby>で<ruby>友<rt>とも</rt></ruby>だちと
        <ruby>楽<rt>たの</rt></ruby>しくあそぼう！
      </span>
    ),
  };

  return messages[selection] || null;
};

export const GENRE_TITLES = (selection) => {
  const messages = {
    [GENRES.saveTheWorld]: (
      <span>
        <ruby>君<rt>きみ</rt></ruby>の
        <ruby>守<rt>まも</rt></ruby>りたい
        <ruby>世界<rt>せかい</rt></ruby>はどこかな？
      </span>
    ),
    [GENRES.adventure]: (
      <span>
        <ruby>冒険<rt>ぼうけん</rt></ruby>したい<ruby>世界<rt>せかい</rt></ruby>をえらぼう！
      </span>
    ),
    [GENRES.building]: (
      <span>
        <ruby>作<rt>つく</rt></ruby>る<ruby>世界<rt>せかい</rt></ruby>をえらぼう！
      </span>
    ),
    [GENRES.raising]: (
      <span>
        どんな<ruby>動物<rt>どうぶつ</rt></ruby>や<ruby>モンスター<rt>もんすたー</rt></ruby>を
        <ruby>育て<rt>そだて</rt></ruby>てみたい？
      </span>
    ),
    [GENRES.puzzle]: (
      <span>
        <ruby>頭脳<rt>ずのう</rt></ruby><ruby>チャレンジ<rt>ちゃれんじ</rt></ruby>！どれにする？
      </span>
    ),
    [GENRES.multiplayer]: (
      <span>
        どの<ruby>ゲーム<rt>げーむ</rt></ruby>で1<ruby>位<rt>い</rt></ruby>をめざす？
      </span>
    ),
    [GENRES.sports]: (
      <span>
        どの<ruby>スポーツ<rt>すぽーつ</rt></ruby>で
        <ruby>活躍<rt>かつやく</rt></ruby>したい？
      </span>
    ),
    [GENRES.party]: (
      <span>
        みんなで<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>ゲーム<rt>げーむ</rt></ruby>をえらぼう！
      </span>
    ),
  };

  return messages[selection] || null;
};