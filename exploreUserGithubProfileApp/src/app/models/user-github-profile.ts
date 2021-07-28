export interface UserGithubProfile {
    login:string
    avatar_url:string,
    name:string,
    email:string,
    bio:string,
    twitter_username:string,
    public_repos:number,
    public_gists:number,
    followers:number,
    following:number
    repos_url:string,
    received_events_url:string,
    blog:{},
    hireable:{},
    html_url:string
}
export interface repo{
    name:string,
    description:string,
    url:string
    size:number,
    forks:number,
    language:string
}
export interface pEvents{

}

