<template>
  <div :class="{SiteNav:true,'SiteNav--thinFull':sticky}" queryselectoralways="49">
    <div :class="{'Sticky':true,'SiteNav-sticky':true,'is-active':sticky}" queryselectoralways="54">
      <div class="Sticky-content" :style="stickyStyle">
        <div class="SiteNav-area">
          <div class="SiteNav-bar">
            <div class="SiteNav-menu">
              <a
                class="Link Link--block SiteNav-logo"
                href="/zh-cn/"
                data-analytics="main-nav"
                data-analytics-placement="Logo"
              >
                <div
                  class="Logo Logo--wow Logo--wowAnniversary SiteNav-logo-full position-absolute"
                ></div>
                <div class="Logo Logo--anniversarySmall SiteNav-logo-icon"></div>
              </a>
              <div class="SiteNav-sectionLeft">
                <div class="SiteNav-menuList List">
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink"
                      data-dropdown="SiteNav-dropdown-0"
                      tabindex="0"
                      queryselectoralways="36"
                    >
                      <div
                        class="DropdownLink DropdownLink--gold DropdownLink--goldWithHover text-upper"
                      >
                        <span class="SiteNav-menuListLinkText" data-text="游戏">游戏</span>
                        <span class="SiteNav-dropdownIndicator DropdownLink-indicator"></span>
                      </div>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink text-upper"
                      href="/zh-cn/news"
                      data-analytics="main-nav"
                      data-analytics-placement="News"
                    >
                      <span class="SiteNav-menuListLinkText" data-text="新闻">新闻</span>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink text-upper"
                      href="http://bbs.wow.blizzard.cn/forum.php"
                      data-analytics="main-nav"
                      data-analytics-placement="Forums"
                    >
                      <span class="SiteNav-menuListLinkText" data-text="论坛">论坛</span>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink text-upper"
                      href="https://shop.battlenet.com.cn/zh-cn/family/world-of-warcraft"
                      data-analytics="shop-link"
                      data-analytics-placement="Shop || Nav"
                    >
                      <span class="SiteNav-menuListLinkText" data-text="商城">商城</span>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink text-upper"
                      href="http://wow.blizzard.cn/minisite/classic"
                      data-analytics="main-nav"
                      data-analytics-placement="WoW Classic"
                    >
                      <span class="SiteNav-menuListLinkText" data-text="《魔兽世界》经典怀旧服">《魔兽世界》经典怀旧服</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="SiteNav-sectionRight">
                <div class="SiteNav-menuList List">
                  <div class="SiteNav-menuListItem SiteNav-menuListItem--search List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink SiteNav-searchLink hover-white color-gold-light"
                      data-dropdown="SiteNav-dropdown-1"
                      tabindex="0"
                      queryselectoralways="36"
                    >
                      <span class="Icon Icon--wow-search SiteNav-searchOpen">
                        <svg
                          class="Icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 64 64"
                          focusable="false"
                        >
                          <use
                            xlink:href="/static/components/Icon/svg/wow-search.7c08692a91547c4e3849e39f7dee99f4.svg#wow-search"
                          />
                        </svg>
                      </span>
                      <span class="Icon Icon--close SiteNav-searchClose">
                        <svg
                          class="Icon-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 64 64"
                          focusable="false"
                        >
                          <use
                            xlink:href="/static/components/Icon/svg/close.a9ffd5f54f2a6c649636aab0e0392caa.svg#close"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem List-item">
                    <a
                      class="Link Link--block SiteNav-menuListLink text-upper"
                      href="/zh-cn/login"
                      data-analytics="main-nav"
                      data-analytics-placement="Community - Log In"
                    >
                      <span class="SiteNav-menuListLinkText" data-text="登录">登录</span>
                    </a>
                  </div>
                  <div class="SiteNav-menuListItem SiteNav-menuListItem--user List-item">
                    <div class="SiteNav-menuListItemWrap">
                      <a
                        class="Link Link--block SiteNav-menuListLink text-upper"
                        href="https://www.battlenet.com.cn/account/creation/tos.html?theme=wow&amp;style=wow-trial"
                        data-analytics="account-creation-link"
                        data-analytics-placement="Nav"
                      >
                        <span class="SiteNav-menuListLinkText" data-text="免费体验">免费体验</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Dropdown SiteNav-doormat" name="SiteNav-dropdown-0" queryselectoralways="20">
            <div class="SiteNav-doormatContent">
              <div class="Grid Grid--gutters">
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">游戏玩法</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/races"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Gameplay - Races"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >种族</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/classes"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Gameplay - Classes"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >职业</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/talent-calculator"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Gameplay - Talent Calculator"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >天赋模拟器</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">魔兽世界知识</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - All"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >所有</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=video"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - Animation"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >动画</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=audio"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - Audio"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >音频</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=comics"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - Comics"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >漫画</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=books"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - Books"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >书籍</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=short-stories"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Lore - Short Stories"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >短篇小说</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/story#tab=characters"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Characters"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >魔兽角色</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--external Link--block SiteNav-pageLink"
                          href="http://www.battlenet.com.cn/wow/zh/game/the-story-of-warcraft/chapter1"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Story - Timeline"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >魔兽里程碑</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">指南和信息</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/new-players-guide"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Guides - New Players"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >新玩家：准备起步</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/returning-players-guide"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Guides - Returning Players"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >回归玩家：欢迎回归</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/status"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Game - Guides - Realm Status"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >服务器状态</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">资料片</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/battle-for-azeroth"
                          type="CATEGORY_ITEM"
                          data-analytics="Game - Expansions - Battle for Azeroth"
                          data-analytics-placement="main-nav"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >争霸艾泽拉斯</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="Dropdown SiteNav-doormat SiteNav-searchDropdown"
            name="SiteNav-dropdown-1"
            queryselectoralways="20"
          >
            <div class="SiteNav-doormatContent">
              <form class="SiteNav-searchBox" action="/search" method="GET">
                <span class="Icon Icon--searchGold SiteNav-searchIcon"></span>
                <input
                  class="SiteNav-searchInput"
                  id="searchInput"
                  name="q"
                  type="search"
                  placeholder="搜索内容"
                  autocomplete="off"
                  data-default-tabindex="0"
                  tabindex="-1"
                />
              </form>
              <div class="space-medium"></div>
              <div class="Grid Grid--gutters">
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">资源</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/new-players-guide"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Resources - New Players"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >新玩家：准备起步</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/returning-players-guide"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Resources - Returning Players"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >回归玩家：欢迎回归</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/talent-calculator"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Resources - Talent Calculator"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >天赋模拟器</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/status"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Resources - Realm Status"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >服务器状态</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">新闻</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/news"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - News - Most Recent"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >最近更新</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">游戏玩法</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/races"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Gameplay - Races"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >种族</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/game/classes"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Gameplay - Classes"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >职业</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Grid-1of4">
                  <div
                    class="List List--full List--vertical List--separator List--separatorBrownMedium"
                  >
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="SiteNav-sectionTitle font-title-tiny-onDark">论坛</div>
                    </div>
                    <div class="List-item gutter-tiny gutter-vertical">
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--external Link--block SiteNav-pageLink"
                          href="http://www.battlenet.com.cn/forums/zh/wow/2826576/"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Forums - Support"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >支持</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/forum/community"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Forums - Community"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >社区</a>
                      </div>
                      <div class="gutter-vertical gutter-tiny">
                        <a
                          class="Link Link--block SiteNav-pageLink"
                          href="/zh-cn/forum/website-feedback"
                          type="CATEGORY_ITEM"
                          data-analytics="main-nav"
                          data-analytics-placement="Search - Forums - Website &amp; Mobile Feedback"
                          data-default-tabindex="0"
                          tabindex="-1"
                        >网页和移动端反馈</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    alwaysSticky: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      sticky: this.alwaysSticky
    };
  },
  created() {
    if (!this.alwaysSticky) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
          this.sticky = true;
        }else{
          this.sticky = false;

        }
      });
    }
  },
  computed: {
    stickyStyle() {
      let style = {};
      if (this.sticky) {
        style = { zIndex: 1000, top: "0px", right: "16px" };
      }
      return style;
    }
  }
};
</script>

<style scoped>
</style>
