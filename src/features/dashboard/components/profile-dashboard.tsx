interface ProfileDashProps {
  userName?: string
  userFunction?: string
  avatarSrc?: string
  coverSrc?: string
  quartil?: number
  humorIcon?: string
  points?: number
}

function ProfileDash({
  userName = 'Nome do Usuário',
  userFunction = 'Função do Usuário',
  avatarSrc = '/default-avatar.jpg',
  coverSrc = '/default-cover.jpg',
  quartil = 1,
  humorIcon = '/humor-icon.jpg',
  points = 100
}: ProfileDashProps) {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col justify-between w-full h-full text-card-foreground">
      <div className="p-3">
        {/* Cover e Avatar */}
        <div className="relative">
          <img
            src={coverSrc}
            alt="Cover"
            className="w-full h-[90px] rounded-xl object-cover"
          />
          <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full border-4 border-card bg-card overflow-hidden">
              <img
                src={avatarSrc}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Informações do usuário */}
        <div className="text-center mt-10">
          <p className="font-medium text-base text-card-foreground">
            {userName}
          </p>
          <p className="font-normal text-sm text-muted-foreground mt-1">
            {userFunction}
          </p>
        </div>

        {/* Estatísticas */}
        <div className="flex items-center justify-between px-4 mt-4 bg-muted/50 py-2 rounded-lg border border-border">
          <div className="text-center">
            <p className="font-medium text-sm text-muted-foreground">Quartil</p>
            <p className="text-sm font-semibold text-primary">{quartil}º</p>
          </div>

          <span className="text-border">|</span>

          <div className="text-center">
            <p className="font-medium text-sm text-muted-foreground">Humor</p>
            <div className="flex justify-center">
              <img src={humorIcon} alt="Humor" className="w-[20px] h-[20px]" />
            </div>
          </div>

          <span className="text-border">|</span>

          <div className="text-center">
            <p className="font-medium text-sm text-muted-foreground">Pontos</p>
            <p className="text-sm font-semibold text-primary">{points}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDash
