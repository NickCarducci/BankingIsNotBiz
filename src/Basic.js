import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //donor: true,
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    //this.plaintiff = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
    document.addEventListener("snipcart.ready", (eh) => {
      //var count = window.Snipcart.api.items.count();console.log("snipcart: ", count);
      console.log(eh);
    });
    /*window.SnipcartSettings = {
      publicApiKey:
        "YmM2ZGQ2OWEtOTMwNS00ZDkwLWEyYWMtZGE0Y2EyNGQxZDQwNjM4MDMxODkxNTczMjM4ODMw",
      loadStrategy: "on-user-interaction",
      modalStyle: "side"
    };*/
    this.handleScroll();
  };
  check = (pathname) => {
    if (pathname === "/") {
      // window.scroll(0, this.plaintiff.current.offsetTop);
    }
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);

      //5th Generation African American Millennials
      //https://reverseamortization.quora.com/How-many-slaves-in-America-have-great-great-grandchildren
    }
  };
  componentWillUnmount = () => {
    //window.Snipcart.api.modal && window.Snipcart.api.modal.close();
    clearTimeout(this.starttime);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    } //"abolish exchange value" - CJ
    //social capital estranged from the rollover/expiry individual
    //govrent assert the universal. "'capitaism is small gov ad freedom' so much no"
  }; //authority is unique for payment for the transaction requires it,
  //but for instance a distributed database for a death registry, would not
  //acheive trustlessness by the same methods
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          lineHeight: "20px",
          fontFamily: "'Amiri', serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "fixed", //salt bank vaults royalty stewardship
            right: "0px", //living commodities at the equator
            bottom: "0px",
            cursor: "pointer"
          }}
          onClick={() => this.props.setBasic()}
        >
          more
        </div>
        <div style={{ float: "right", textAlign: "right", maxWidth: "200px" }}>
          <div>
            anarchy - no{space}
            <a style={{ color: "rgb(200,100,250)" }} href="https://scopes.cc">
              contracts
            </a>
          </div>
          <div>communism - investment housing labor (constant)</div>
          <div>socialism - democracy</div>
        </div>
        <h3>
          Are resourcefully conservative{space}
          <a href="https://commie.dev/anarchy">anarchists</a>
          {space}"<a href="https://jester.com.co">trolls</a>"?
        </h3>
        <a href="https://carfacedimonlikefloyd.quora.com">
          Drop dead wall street
        </a>
        !
        <br />
        <a href="https://vau.money">
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://www.dropbox.com/s/chws36hf2o7icbr/Screen%20Shot%202022-12-10%20at%202.38.45%20PM.png?raw=1"
            }
            float="left"
            title="vaumoney, 'as developers, Plaid is our only choice."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 17]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
        </a>
        <br />
        Why won’t banks in the United States allow users to save in investment
        banks without having good character and responsibility?{space}
        <i>
          Does John Catsimitidis want socialists to drop dead because they
          wouldn't want their business income to be invested? Why are the Plaid
          linkable bank list accounts made to lend instead of having its own ACH
          account number like an investment bank?
        </i>
        <br />
        <br />
        Market concentration Be bullish on competition (
        <a href="https://reddit.com/r/wallstreetvol">bearish</a>)
        <h1 style={{ lineHeight: "26px" }}>
          What industry employs non-deflationary work?{space}
          <span>
            Isn't a non-deflationary job{space}
            <i>inflationary</i>
            {space}rather than productive?
            {space}
            <span style={{ color: "grey" }}>
              Doesn’t CPI drop when{space}
              <a
                style={{ color: "grey" }}
                href="https://anchor.fm/micro-theory/episodes/Strategic-Voting-with-a-potential-network-effect-and-new-antifinance-alternative-e1qvulq"
              >
                employee benefits from{space}
                <i>essential</i>
                {space}institutions
              </a>
              {space}as a percentage of gross domestic purchases grows and/or
              new money/loitering inflates?
            </span>
          </span>
          {space}
          <span style={{ color: "cornflowerblue" }}>
            Unless the rich are overeating, shouldn't labor and investment
            either deflate purchases or cause equality?
          </span>
        </h1>
        <h2>Is it true that Karl Marx ripped off of Pierre-Joseph Proudhon?</h2>
        Such is the ethics of property.
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid cornflowerblue"
          }}
        >
          Every occupant is, then, necessarily a possessor or usufructuary, — a
          function which excludes proprietorship. Now, this is the right of the
          usufructuary: he is{space}
          <a href="https://theanarchistlibrary.org/library/pierre-joseph-proudhon-what-is-property-an-inquiry-into-the-principle-of-right-and-of-governmen">
            responsible
          </a>
          {space}
          for the thing entrusted to him; he must use it in conformity with
          general utility, with a view to its preservation and development; he
          has no power to transform it, to diminish it, or to change its nature;
          he cannot so divide the usufruct that another shall perform the labor
          while he receives the product. In a word, the usufructuary is under
          the supervision of society, submitted to the condition of labor and
          the law of equality. (Pierre-Joseph Proudhon,{space}
          <i>
            What is Property? An Inquiry into the Principle of Right and of
            Government
          </i>
          ,{space}
          <b>1831–41</b>)
        </div>
        So,
        {space}
        <a href="https://www.quora.com/What-is-Jordan-B-Petersons-opinion-on-Friedrich-Nietzsche/answer/Nick-Carducci">
          eat it
        </a>
        {space}(<i>What industry employs non-deflationary work?</i>) .
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          <i>
            According to M. Proudhon, “improvement in the use of the land” – a
            consequence “of the perfecting of industry” – causes the continual
            rise in rent. On the contrary, this{space}
            <a href="https://www.marxists.org/archive/marx/works/1847/poverty-philosophy/ch02d.htm">
              improvement
            </a>
            {space}causes its periodic fall.{space}
            <span style={{ color: "firebrick" }}>
              (Aren’t those who feel the pinch of inflation of gross domestic
              purchases as a static bundle still the impoverished when equality
              isn’t improved by additional non-deflationary labor/investment
              capital in parallel like a gift nor even concurrently? All in all,
              Marxists believe the disutility of deflationary investment and
              labor capital is crowded out by social capital, and the capitalist
              cycle makes non-deflationary jobs and long term layoffs in
              seriatim.)
            </span>
            <br />
            <br />
            Corporations and masterships, which are hated so bitterly, but which
            will reappear if we are not careful, are the necessary results of
            the principle of competition which is inherent in property; their
            organization was patterned formerly after that of the feudal
            hierarchy, which was the result of the subordination of men and
            possessions.
          </i>
          <br />
          <br />
          {/**https://theanarchistlibrary.org/library/pierre-joseph-proudhon-what-is-property-an-inquiry-into-the-principle-of-right-and-of-governmen */}
          His usufruct is spread over two periods. During one the labourer
          produces a value that is only equal to the value of his labour-power;
          he produces its equivalent. This the capitalist receives in return for
          his advance of the price of the labour-power, a product ready made in
          the market. (Karl Marx.{space}
          <i>Capital I.18, Various Formula for the Rate of Surplus-Value</i>,
          1867)
        </div>
        <br />
        <i>
          As the{space}
          <a href="https://saverparty.xyz/global">self-identifying</a>
          {space}democratic socialist and market socialist cohorts stand today,
          {space}
          <i>
            the latter being less used in this fashion for sociology generally
          </i>
          , the former is progressive. If socialist is industry subsidy, then
          that’s how Marxism nor socialism achieves the philosophy of
          philosophers that is
          {space}
          <a href="http://numerisation.bibliotheque-diderot.fr/R/?func=dbin-jump-full%26object_id=1094625">
            frugality
          </a>
          . I don’t know who but Proudhonites and Sayists wants the liberal
          reward of Adam Smith to replace the{space}
          <a href="https://apps.bea.gov/itable/?ReqID=70&step=1#eyJhcHBpZCI6NzAsInN0ZXBzIjpbMSwyNCwyOSwyNSwzMSwyNiwyNywzMF0sImRhdGEiOltbIlRhYmxlSWQiLCIxMyJdLFsiQ2xhc3NpZmljYXRpb24iLCJOb24tSW5kdXN0cnkiXSxbIk1ham9yX0FyZWEiLCI0Il0sWyJTdGF0ZSIsWyIwIl1dLFsiQXJlYSIsWyIwMDAwMCJdXSxbIlN0YXRpc3RpYyIsWyItMSIsIjIxMjAiLCIyMjEwIiwiMjIyMCIsIjIyMzAiLCIyMzEwIiwiMjMyMCIsIjIzMzAiLCIyMzQwIiwiMjQwMCIsIjI1MDAiXV0sWyJVbml0X29mX21lYXN1cmUiLCJMZXZlbHMiXSxbIlllYXIiLFsiLTEiXV0sWyJZZWFyQmVnaW4iLCItMSJdLFsiWWVhcl9FbmQiLCItMSJdXX0=">
            social security deficit
          </a>
          .{space}
          {/**https://www.marxists.org/archive/marx/works/1867-c1/ch18.htm */}In
          {space}
          <a href="https://www.quora.com/unanswered/In-Islam-isn-t-equal-measure-in-terms-of-stock-What-is-the-measure-of-economics-in-Islam-How-can-finance-with-expiry-happen-in-Islamic-banking">
            Islam, isn’t equal measure in terms of stock? What is the measure of
            economics in Islam? How can finance with expiry happen in Islamic
            banking?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/unanswered/Why-should-a-seller-be-able-to-collude-with-the-lender-to-make-prices">
            Why should a seller be able to collude with the lender to make
            prices?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/Isn-t-inflation-caused-by-loitering-and-or-new-money">
            Isn’t inflation caused by loitering and/or new money?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/unanswered/What-is-CPI-in-relation-to-non-deflationary-labor-investment-capital">
            What is CPI in relation to non-deflationary labor/investment
            capital?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/unanswered/Isn-t-a-gift-usually-both-a-benefit-and-utility">
            Isn’t a gift usually both a benefit and utility?
          </a>
          {space}•{space}
          <a href="https://www.quora.com/unanswered/Aren-t-those-who-feel-the-pinch-of-inflation-of-gross-domestic-purchases-as-a-static-bundle-still-the-impoverished-when-equality-isn-t-improved-by-additional-non-deflationary-labor-investment-capital-in-parallel">
            Aren’t those who feel the pinch of inflation of gross domestic
            purchases as a static bundle still the impoverished when equality
            isn’t improved by additional non-deflationary labor/investment
            capital in parallel like a gift nor even concurrently?
          </a>
        </i>
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid",
            color: "rgb(200,100,250)"
          }}
        >
          Is it to be enough to set foot on a plot of common ground, in order to
          be able to call yourself at once the master of it? Is it to be enough
          that a man has the strength to expel others{space}
          <a
            style={{ color: "indigo" }}
            href="https://www.marxists.org/reference/subject/economics/rousseau/social-contract/ch01.htm#009"
          >
            for a moment, in order
          </a>
          {space}
          to establish his right to prevent them from ever returning? How can a
          man or a people seize an immense territory and keep it from the rest
          of the world except by a punishable usurpation, since all others are
          being robbed, by such an act, of the place of habitation and the means
          of subsistence which nature gave them in common? (Jean Jacques
          {space}
          <a
            style={{ color: "indigo" }}
            href="https://nonvoters.quora.com/Wasn-t-The-Social-Contract-a-joke-Isn-t-Jean-Jacques-Rousseau-kidding-Have-you-seen-his-face-How-is-that-not-mockery"
          >
            Rousseau
          </a>
          ,{space}
          <i>The Social Contract</i>, 1762)
        </div>
        <br />
        {/*https://www.marxists.org/reference/subject/economics/rousseau/social-contract/ch01.htm#009*/}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          <i>
            <span style={{ color: "cadetblue" }}>
              Every{space}
              <a href="https://reddit.com/r/moralanarchism">
                species of animals
              </a>
              {space}naturally multiplies{space}
              <a href="https://www.reddit.com/r/DebateCommunism/comments/yuha2o/comment/iwbq52r/">
                in proportion to the means
              </a>
              {space}of their{space}
              <a href="https://www.reddit.com/r/newjersey/comments/yt9rf6/comment/iw35q6y/">
                subsistence
              </a>
              , and no species can ever multiply beyond it. But in civilised
              society it is only among the inferior ranks of people that the
              scantiness of subsistence can set limits to the further
              multiplication of the human species; and it can do so in no other
              way than by destroying a great part of the children which their
              fruitful{space}
              <a href="https://github.com/nickcarducci">marriages</a>
              {space}produce.
            </span>
            {space}The liberal reward of labour, by enabling them to provide
            better for their children, and consequently to bring up a greater
            number, naturally tends to widen and extend those limits. It
            deserves to be remarked, too, that it necessarily does this as
            nearly as possible in the proportion which the demand for labour
            requires. If this demand is continually increasing, the reward of
            labour must necessarily encourage in such a manner the marriage and
            multiplication of labourers, as may enable them to supply that
            continually increasing demand by a continually increasing population
          </i>
          . (Adam Smith,{space}
          <i>
            An Inquiry into the Nature and Causes of The Weath of Nations, Book
            I: On the Causes of Improvement in the Productive Powers: On Labour,
            and on the Order According to Which its' Produce is Naturally
            Distributed Among the Different Ranks of the People, Chapter 8: On
            the Wages of Labour
          </i>
          , 1776)
          <br />
          <br />
          His whole stock, therefore, is distinguished into two parts. That part
          which, he expects, is to afford him this revenue, is called his
          capital. The other is that which supplies his immediate consumption;
          (Adam Smith,{space}
          <i>
            An Inquiry into the Nature and Causes of The Wealth of Nations, Book
            II: On the Nature, Accumulation, and Employment of Stock, Chapter I:
            On the Division of Stock
          </i>
          , 1776)
        </div>
        <br />
        {/*https://www.marxists.org/reference/archive/smith-adam/works/wealth-of-nations/book02/ch01.htm*/}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          les dangers of the invention of money, and the distinct advantages of
          agriculture; the blessed difgrace of Polydamas; finally the rarest
          example, renews nowadays, twice growling for the happiness of our
          Nation.. since Idomenee, giving the example of simplicity, putting a
          brake on luxury, & thus encouraging the Sages, who will do well like
          to be authorized in an honest frugality. (Victor d’Hupay,{space}
          <i>
            Projet de communauté philosophe, “
            <a href="http://numerisation.bibliotheque-diderot.fr/R/?func=dbin-jump-full%26object_id=1094625">
              Project for a Philosophical Community
            </a>
            ”
          </i>
          , 1777)
        </div>
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid cornflowerblue"
          }}
        >
          Competition, sometimes called liberty of trade, — in a word,{space}
          <a href="https://theanarchistlibrary.org/library/pierre-joseph-proudhon-what-is-property-an-inquiry-into-the-principle-of-right-and-of-governmen">
            property in exchange, — will be for a long time the basis of our
            commercial legislation
          </a>
          ; which, from the economical point of view, embraces all civil laws
          and all government. Now, what is competition? A duel in a closed
          field, where arms are the test of right.
          <br />
          <br /> Smith,{space}
          <a href="https://markethistory.quora.com/How-can-capitalism-and-socialism-be-reconciled-within-a-liberal-framework-1">
            <i>
              <b>Ricardo</b>
            </i>
          </a>
          , and de Tracy, on the contrary, say that labor is the sole agent of
          production. r/sayists (?), and most of his successors, teach that both
          land and labor and capital are productive. The latter constitute the
          eclectic school of political economy. The truth is, that neither land
          nor labor nor capital is productive.
        </div>
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          {/*http://numerisation.bibliotheque-diderot.fr/R/9UEQJK274DI3MX4A1RD8Q7D81LYR3KT8NR27K7EF4G6HDPT5TR-00035?func=dbin-jump-full&object%5Fid=1094625&pds_handle=GUEST*/}
          <i>
            It is necessary to distinguish carefully the complete right of
            {space}
            <a
              href="https://mises.org/library/treatise-political-economy"
              //"https://commie.dev/props"
            >
              property
            </a>
            , which is founded on labour, from the transient right of possession
            which is acquired by mere priority of occupancy; thus, before the
            appropriation of land, if any individual had occupied a particular
            spot, for repose or shade, it would have been unjust to deprive him
            of possession of it.
          </i>
          <br />
          <br />A man who cultivates his own garden at his own expense, is at
          once the possessor of land, capital, and industry, and exclusively
          enjoys the profits of proprietor/capitalist/laborer. …Indeed, the
          tenant himself may improve the ground at his own expense; but he only
          derives the profit from this capital for the duration of his lease,
          with the expiry of which it remains with the proprietor of the land.
          (Jean-Baptiste Say,{space}
          <i>A Treatise on Political Economy</i>, 1821)
        </div>
        {/*https://mises.org/library/treatise-political-economy*/}
        <br />
        Isn’t a binary dipole of social mobility a monopolistic agent?
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid cornflowerblue"
          }}
        >
          The most remarkable and the most immediate effects of{space}
          <i
            style={{
              color: "rgb(200,100,250)"
            }}
          >
            monopoly
          </i>
          {/*non-binary dipole*/ space}are:
          <br />
          <br />
          1. In the political order, the classification of humanity into
          families, tribes, cities, nations, States: this is the elementary
          division of humanity into groups and sub-groups of laborers,
          distinguished by race, language, customs, and climate. It was by
          monopoly that the human race took possession of the globe, as it will
          be by association that it will become complete sovereign thereof.
          <br />
          <br />
          Political and civil law, as conceived by all legislators with-out
          exception and as formulated by jurists, born of this patriotic and
          national organization of societies, forms, in the series of social
          contradictions, a first and vast branch, the study of which by itself
          alone would demand four times more time than we can give it in
          discussing the question of industrial economy propounded by the
          Academy.
          <br />
          <br />
          2. In the economic order, monopoly contributes to the increase of
          comfort, in the first place by adding to the general wealth through
          the perfecting of methods, and then by CAPITALIZING, — that is, by
          consolidating the conquests of labor obtained by division, machinery,
          and competition. From this effect of monopoly has resulted the
          economic fiction by which the capitalist is considered a producer and
          capital an agent of production; then, as a consequence of this
          fiction, the theory of net product and gross product. (Pierre-Joseph
          Proudhon,{space}
          <i>
            The System of Economic Contradictions or, The Philosophy of Poverty,
            Volume I: Chapter VI, Fourth Period: Monopoly, "Necessity of
            monopoly"
          </i>
          , 1847)
        </div>
        <br />
        Post-<a href="https://commie.dev/props">Marx</a>
        {space}(<a href="https://commie.dev/anarchy">?</a>):
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          This slavery manifests itself daily in all kinds of ways. Apart from
          the vexations and{space}
          <a href="https://www.marxists.org/reference/archive/bakunin/works/various/capsys.htm">
            oppressive conditions of the contract
          </a>
          {space}
          which turn the worker into a subordinate, a passive and obedient
          servant, and the employer into a nearly absolute master - apart from
          all that, it is well known that there is hardly an industrial
          enterprise wherein the owner, impelled on the one hand by the two-fold
          instinct of an unappeasable lust for profits and absolute power, and
          on the other hand, profiting by the economic dependence of the worker,
          does not set aside the terms stipulated in the contract and wring some
          additional concessions in his own favor. Now he will demand more hours
          of work, that is, over and above those stipulated in the contract; now
          he will cut down wages on some pretext; now he will impose arbitrary
          fines, or he will treat the workers harshly, rudely, and insolently.
          (Mikhail Bakunin,{space}
          <i>The Capitalist System</i>, 1814–76)
        </div>
        <br />
        {/*https://www.marxists.org/reference/archive/bakunin/works/various/capsys.htm*/}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          <i>
            The compulsory powers of municipalities have made it easy to carry
            out any great work for a town without difficulty or loss of time
          </i>
          {space}but{space}
          <b>great works</b>
          {space}are a poor compensation for other serious evils.{space}
          <b>Great debts</b>
          {space}have been{space}
          <b>accumulated</b>;{space}
          <i>the burden of rates has become grievous to be borne</i>; possession
          of power has become{space}
          <i>
            a matter of{space}
            <b>political</b>
          </i>
          {space}party ,{space}
          <i>with all its innumerable evils</i>; great monopolies are beginning
          to occupy the ground, -- and let it be remembered that all systems,
          once authoritatively adopted,{space}
          <a href="https://oll.libertyfund.org/title/herbert-the-right-and-wrong-of-compulsion-by-the-state-1885">
            standing
          </a>
          {
            space /*aren't politicing politicians always virtuous, limit self assessments and personal incomes */
          }
          the way of{space}
          <i>
            <a href="https://commie.dev/guild">new</a>
            {space}discoveries and improvements, --{space}
            <a href="https://commie.dev/jobbery">jobbery</a>
            {space}(Do we need labor and investment growth that doesn’t
            deflate?)
          </i>
          {space}is said to exist; the divine right of some to direct the manner
          in which the resources of others shall be used has more and more
          become a fixed national idea; and we have all, poor and rich alike
          been prevented from learning the fruitful lesson of voluntarily
          combining to supply our own special wants in our own special fashions.
          (Auberon Molyneux Herbert,
          {space}
          <i>The Right and Wrong of Compulsion by the State</i>, 1885)
        </div>
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          <i>
            If we admit, in fact, that a central government is absolutely
            useless to regulate the relations of Communes between each other,
            why do we grant the necessity to regulate the{space}
            <b>mutual</b>
            {space}relations of the groups that constitute the Commune? And if
            we concede to the free initiative of the communes the task of coming
            to an understanding between themselves on enterprises that concern
            several cities at once, how can we refuse this same initiative to
            the groups of which a Commune is composed? A government within the
            Commune has no more right to exist than a government over the
            Commune.
          </i>
          <br />
          <br />
          The day on which, in consequence of the development of the
          revolutionary situation, the governments are swept out by the people
          and disorganization is created in the ranks of the bourgeoisie who can
          only survive through the protection of the State, the insurgent people
          will not wait for any old government in its marvelous wisdom to decree
          economic reforms. They will abolish individual property by themselves
          taking possession, in the name of the whole people and by violent
          expropriation of the whole of social wealth which had been accumulated
          by the work of past generations. They will not stop short at
          expropriating the owners of social capital by a decree that will
          remain a dead letter; they will take possession and establish their
          {space}
          <a href="https://www.marxists.org/reference/archive/kropotkin-peter/1885/words-of-a-rebel/chapter11.html">
            rights of usufruct
          </a>
          {space}immediately. They will organize the workshops so that they
          continue production. They will exchange their hovels for healthy
          habitations in the houses of the well-todo; they will immediately find
          ways of utilizing the riches accumulated in the cities; they will take
          possession of it as if all this wealth had never been stolen from them
          by the bourgeoisie. Once the industrial baron who seized his booty
          from the worker has been evicted, production will continue, shaking
          off the fetters that hinder it, abolishing the speculations that kill
          it, getting rid of the muck that hinders its development, and changing
          it according to the needs of the moment under the impetus provided by
          freedom of work. (Peter Kropotkin,{space}
          <i>Words of a Rebel</i>, The Paris Commune, 1885)
          <hr />
          <i>
            James Watt{space}
            <a href="https://www.marxists.org/reference/archive/kropotkin-peter/1902/mutual-aid/conclusion.htm">
              spent
            </a>
            {space}twenty or more years of his life in order to render his
            invention serviceable, because he could not find in the last century
            what he would have readily found in medieval Florence or Brügge,
            that is, the artisans capable of realizing his devices in metal, and
            of giving them the artistic finish and precision which the
            steam-engine requires.
          </i>
          <br />
          <br />
          To attribute, therefore, the industrial progress of our century to the
          war of each against all which it has proclaimed, is to reason like the
          man who, knowing not the causes of rain, attributes it to the victim
          he has immolated before his clay idol. For industrial progress, as for
          each other conquest over nature, mutual aid and close intercourse
          certainly are, as they have been, much more advantageous than mutual
          struggle. (Peter Kropotkin,{space}
          <i>Mutual Aid: A Factor of Evolution</i>, The Paris Commune, 1902)
        </div>
        <br />
        {/*https://oll.libertyfund.org/title/herbert-the-right-and-wrong-of-compulsion-by-the-state-1885*/}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          That is to say, any particular machine may yield an income which is of
          the nature of a rent, and which is sometimes called a Rent; though on
          the whole, there seems to be some advantage in calling it a
          Quasi-rent. But we cannot properly speak of the interest yielded by a
          machine. If we use the term "interest" at all, it must be in relation
          not to the machine itself, but to its money value. (Alfred Marshall,
          {space}
          <i>
            Principles of Economics, Book Two: Some Fundamental Notions, Chapter
            4, Income, Capital
          </i>
          , 1890)
        </div>
        <br />
        {/*https://www.marxists.org/reference/subject/economics/marshall/bk2ch04.htm */}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          Whenever an employer asks for special performances which appear
          irksome or repulsive to the employees, he must pay extra for the
          excess of disutility the worker must expend. (Ludwig von Mises,{space}
          <i>
            Human Action, Part 4: Catallactics or Economics of the Market
            Society, Chapter XXI. Work and Wages, Section 7. The Supply of Labor
            as Affected by the Disutility of Labor
          </i>
          , 1949)
        </div>
        <br />
        {/*https://mises.org/library/human-action-0/html/pp/828 */}
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          Monetary theory has no ideological content. It deals with a scientific
          question—how a particular social contrivance works. It may surprise
          most readers to learn that, in today’s terminology, Karl Marx could be
          labeled a “
          <a href="https://miltonfriedman.hoover.org/internal/media/dispatcher/214245/full">
            monetarist
          </a>
          ”—a term that is currently, if incorrectly, regarded as almost
          synonymous with “conservative” or “pro free market.” (Milton Friedman,
          {space}
          <i>Marx and Money, The Newsweek/Daily Beast Company, p. 95, 1980</i>;
          Hoover Inst.)
        </div>
        <br />
        <a href="https://www.quora.com/What-would-a-Marxist-utopia-look-like/answer/Nick-Carducci">
          What would a Marxist utopia look like?
        </a>
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          The{space}
          <a href="https://www.quora.com/How-do-supply-and-demand-function-in-a-socialist-economy/answer/Nick-Carducci">
            press
          </a>
          {space}has already frequently mentioned Marx's intention to sum up the
          {space}
          <a href="https://www.marxists.org/archive/marx/works/1867/reviews-capital/ezeitung.htm">
            results of his many years' studies in a critique of the whole of
            political economy to date and thereby to provide the scientific
            basis for socialist aspirations which neither Fourier{space}
            <i>nor Proudhon nor even Lassalle had been able to do</i>
          </a>
          . (Friedrich Engels,{space}
          <i>Reviews of Capital Volume 1: Elberfelder Zeitung</i>, 1867)
        </div>
        <br />
        How does the discount window differ from share splits?
        {space}&bull;{space}
        <i>
          (Why are banks allowed to borrow from the Federal Reserve? Isn’t the
          system merely a platform market brokerage? How much of its private
          {space}
          <a href="https://reddit.com/r/vaumoney">discount window loans</a>
          {space}are funded by quantitative easing?){space}
          <a href="https://stocktwits.com/nmc123/message/495427024">
            take Prices not products
          </a>
        </i>
        <br />I have 2/3 saying 30 days or 5 units{space}
        <a href="https://nextdoor.com/p/yJhWyXgPTdNG">would cause deflation</a>.
        <br />
        <div
          style={{
            padding: "10px",
            paddingLeft: "8px",
            borderLeft: "2px solid"
          }}
        >
          <h3>
            <i>How does the discount window differ from share splits?</i>
            {space}Why are banks{space}
            <a href="https://fred.stlouisfed.org/graph/?g=WiDR">allowed</a>
            {space}to borrow from the Federal Reserve? Isn’t the system merely a
            platform market brokerage? How much of its private discount window
            loans are funded by quantitative easing?
          </h3>
          They are completely different. Share splits attract new equity
          investors. The discount window enables banks to stay solvent. Banks
          are ‘allowed’ to do it to prevent bank insolvency at the end of a day
          through no fault of the bank.{space}
          <a href="https://www.quora.com/Doesn-t-the-discount-window-cause-inflation/answer/Mark-Munday-20">
            Discount window (Standing) borrowing is funded out of nothing.
          </a>
          {space}These loans are usually repaid the next day and banks keep in
          good standing with the central bank to avoid being shut down. The
          money is created when it is borrowed, as described in my answer to the
          question, and it is destroyed when the loan is repaid. Discount window
          bank liquidity loans don’t cost anyone anything.
        </div>
        <h2>Are disabled people expendable in anarchy</h2>
        Deflationary equality investment labor but for shorting housing labor.
        <br />
        <br />I was made a fool with overwhelming downvotes saying mutual aid is
        usufructuary rights, and the{space}
        <a href="https://medicatethehomeless.quora.com">liberal reward</a>
        {space}of{space}
        <a href="https://reddit.com/r/antifinance">anti-capitalism</a>
        {space}is having dependents, even via the community.
        <br />
        <br />
        The person I was arguing with got upvotes for saying that I was saying
        the disabled are expendable without{space}
        <a href="https://apps.bea.gov/itable/?ReqID=70&step=1#eyJhcHBpZCI6NzAsInN0ZXBzIjpbMSwyNCwyOSwyNSwzMSwyNiwyNywzMF0sImRhdGEiOltbIlRhYmxlSWQiLCIxMyJdLFsiQ2xhc3NpZmljYXRpb24iLCJOb24tSW5kdXN0cnkiXSxbIk1ham9yX0FyZWEiLCI0Il0sWyJTdGF0ZSIsWyIwIl1dLFsiQXJlYSIsWyIwMDAwMCJdXSxbIlN0YXRpc3RpYyIsWyItMSIsIjIxMjAiLCIyMjEwIiwiMjIyMCIsIjIyMzAiLCIyMzEwIiwiMjMyMCIsIjIzMzAiLCIyMzQwIiwiMjQwMCIsIjI1MDAiXV0sWyJVbml0X29mX21lYXN1cmUiLCJMZXZlbHMiXSxbIlllYXIiLFsiLTEiXV0sWyJZZWFyQmVnaW4iLCItMSJdLFsiWWVhcl9FbmQiLCItMSJdXX0=">
          social security
        </a>
        .
        <br />
        <br />
        Are y’all actually{space}
        <a href="https://truncatedwholesaletax.com">progressive</a>
        {space}shills? I try to meet halfway by saying providing only the
        injured and non-speaking developmentally-disabled with taxes until
        mutual aid/dependents meets the cost of living, but then you say they
        either need to include “depressed people” or “there is no{space}
        <a href="https://thetax.party">tax</a>”.
        <h1>SaltBank.org</h1>
        {/*Is confidence in elections all Ron Johnson has when he sues? */}
      </div>
    );
  }
}
