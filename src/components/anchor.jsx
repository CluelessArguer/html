import externalIcon from "/src/assets/arrow-up-right-from-square-solid.svg";

export const Anchor=({anchor, showExternalLinkIcon})=>{
    return(
        <>
            <a href={anchor.href} target={anchor.target} rel={anchor.rel}>
                {anchor.name}
                {
                showExternalLinkIcon
                ?<img style={{width:"0.75rem",height:"0.75rem", marginLeft:"0.5rem"}} src={externalIcon} alt="(opens in new tab)" />
                :<></>
            }
            </a>
        </>
    )
}