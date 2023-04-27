export function TwitterFollowCard({ userName, name, name2, isFollowing }) {
  return (
    <article className="tw-follow-card">
      <header id="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://res.cloudinary.com/marioz/image/upload/${userName}`}

      />
      </header>
      <div className="tw-follow-card-info">
        <strong>{name}</strong>
        <span className="tw-follow-card-infoUserName"> @{name2}</span>
      </div>
      <aside>
        <button className="tw-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}
