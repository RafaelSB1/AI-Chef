import ChefClaudeLogo from "/images/chef-claude-icon.png"

export default function Header() {
    return(
    <header>
        <img src={ChefClaudeLogo} alt="logo" />
        <h1>Chef Claude</h1>
    </header>
    )
}