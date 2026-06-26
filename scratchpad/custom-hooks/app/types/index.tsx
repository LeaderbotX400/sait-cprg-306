export interface GitHubUser{
    login: string;
    name: string |null;
    avatar_url: string;
    bio: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface ProfileStat{
    label: string;
    value: string;
}