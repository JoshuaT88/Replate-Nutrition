export default function Profiles(){
    return(
        <div className="profilesPage">
            {/* Header */}
            <div className="profilesTop">
                <div className="profilesTopText">
                    <span className="profilesHeader">Profiles</span>
                    <p className="profilesBio">Manage dietary profiles for your family and pets</p>
                </div>
                <div className="addProfile">
                    <button className="addProfileButton"><i className="fa-solid fa-plus"></i>  New Profile</button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="profilesSearchContainer">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" className="profilesSearchInput" placeholder="Search profiles..." />
            </div>

            {/* Human Profiles Section */}
            <div className="profilesSection">
                <div className="profilesSectionHeader">
                    <i className="fa-solid fa-person"></i>
                    <h2 className="profilesSectionTitle">Human Profiles</h2>
                    <span className="profilesSectionCount">2</span>
                </div>

                <div className="profileCardGrid">
                    {/* Profile Card 1 */}
                    <div className="profileCard">
                        <div className="profileCardTop">
                            <div className="profileCardInfo">
                                <div className="profileCardAvatar">T</div>
                                <div className="profileCardDetails">
                                    <span className="profileCardName">test</span>
                                    <span className="profileCardAge">77 years old</span>
                                </div>
                            </div>
                            <div className="profileCardActions">
                                <button className="profileCardBtn"><i className="fa-solid fa-pen-to-square"></i></button>
                                <button className="profileCardBtn delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div className="profileCardTags">
                            <span className="tagLabel">Special Conditions</span>
                            <div className="tagList">
                                <span className="tag condition">Autism</span>
                                <span className="tag condition">Crohn's Disease</span>
                            </div>
                        </div>
                        <div className="profileCardTags">
                            <span className="tagLabel">Dietary Restrictions</span>
                            <div className="tagList">
                                <span className="tag dietary">Vegan</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile Card 2 */}
                    <div className="profileCard">
                        <div className="profileCardTop">
                            <div className="profileCardInfo">
                                <div className="profileCardAvatar">A</div>
                                <div className="profileCardDetails">
                                    <span className="profileCardName">alysa</span>
                                    <span className="profileCardAge">23 years old</span>
                                </div>
                            </div>
                            <div className="profileCardActions">
                                <button className="profileCardBtn"><i className="fa-solid fa-pen-to-square"></i></button>
                                <button className="profileCardBtn delete"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div className="profileCardTags">
                            <span className="tagLabel">Special Conditions</span>
                            <div className="tagList">
                                <span className="tag condition">Picky Eater</span>
                                <span className="tag condition">ARFID</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}