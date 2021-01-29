
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "안녕하세요, 디멘입니다.",
    "body": "저는 카이스트 전산학부에 재학 중인 대학생입니다. 수학, 언어, 그리고 바흐를 좋아합니다. 취미는 컴퓨터로 이것저것 만드는 것이고,비전은 모두에게 재미있는 교육의 기회를 주는 것입니다. 중학교 때 수학에 재미를 느끼고 시작한 블로그가 저의 첫 창작 활동이었습니다. 이후 고등학교 때 유사수학 페이지를 관리하며 더 많은 사람들에게 수학의 재미를 알리고자 하였고,현재는 재미있는 학습의 기회를 제공해주는 무료 플랫폼을 만들고자 개발을 공부하고 있습니다. 이 블로그는 제가 개발한 것과 공부한 것을 기록하는 공간입니다. 블로그의 이름인 Stilla는 라틴어로써, ‘물방울’이라는 의미입니다. 하늘에서 조금씩 떨어지는 물방울이 이윽고 커다란 연못을 이루듯,저의 하루하루의 노력이 언젠가 커다란 뜻을 이뤄내기를 바라고 있습니다. "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/contact",
    "title": "Contact",
    "body": "  문의하고 싶으신 내용이 있으시다면 연락 주세요. 문의하고 싶으신 내용은 없지만 저랑 친구하고 싶으신 분들도 연락 주세요 :)   "
    }, {
    "id": 4,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/chrome/",
    "title": "자연스러운 언어 학습을 도와주는 크롬 확장자",
    "body": "2021/01/29 - 크라셴이라는 언어 학자는 언어를 학습하는 방법에 대해 오랜 기간 연구했습니다. 그 결과, 그는 단어의 철자와 뜻을 무작정 암기하는 학습은 매우 비효율적이라는 것을 알아냈습니다. 대신 문맥을 통해 단어의 뜻을 자연스럽게 습득하는 학습이 훨씬 효율적이었습니다. 이 앱은 크라셴의 언어 학습 모델을 응용하기 위해 만들어졌습니다. 이 크롬 확장자는 사용자가 읽고 있는 글에서 일부 단어를 영어나 스페인어 등의 외국어로 바꿔칩니다. 하지만 일부 단어만 바꿔치기 때문에, 대부분의 경우 학습자는 문맥 상에서 바꿔쳐진 외국어 단어가 무슨 뜻인지 유추할 수 있습니다. 이러한 자연스러운 뜻의 유추를 통해 단어 습득을 용이하게 함으로써 언어 학습을 더욱 효율적으로 만드는 것이 이 확장자의 목표입니다. 현재 개발 중인 이 확장자의 기능은 아래와 같습니다.  토플 단어장, 스페인어 기초 100 단어장 등 여러 단어장 중에서 자신의 필요와 수준에 맞는 단어장을 선택할 수 있습니다. 확장자는 단어장에 수록된 단어만 바꿔칩니다.  바꿔쳐진 단어를 클릭하면 그 단어의 뜻을 볼 수 있으며, 우측 상단 사전 링크를 클릭하면 더 자세한 의미까지 공부할 수 있습니다.  어려운 단어는 단어장에 추가하여 나중에 따로 모아볼 수 있습니다. 쉬운 단어는 더이상 바꿔치지 않도록 설정할 수 있습니다.  설정 창에서 단어를 바꾸는 빈도를 조절할 수 있습니다. 이 프로젝트를 지원하고 싶으시다면 이 블로그 좌측 상단의 메뉴 아이콘을 클릭한 후 정담이에게 찹쌀떡 사주기를 클릭하여 도와주실 수 있습니다. 여러분의 응원은 저에게 무엇보다 큰 힘이 됩니다😇 "
    }, {
    "id": 7,
    "url": "/puzzle/",
    "title": "차원을 넘나드는 퍼즐 게임",
    "body": "2021/01/12 - Unity와 C#을 이용하여 퍼즐 게임을 만들고 있습니다. 이 퍼즐의 특징은 2차원과 3차원을 넘나들어야지만 퍼즐을 풀 수 있다는 것입니다. 게임의 목적은 플레이어가 노란색 공을 조정하여 빨간색 큐브까지 도착하는 것입니다. 빨간색 큐브는 건너편 섬에 있기 때문에 일반적인 방법으로는 도달할 수 없습니다. 그러나 아래 영상과 같이 차원을 2차원으로 줄이고, 남색 큐브를 통해 건너간 뒤, 다시 차원을 3차원으로 옮기면 빨간색 큐브에 도착할 수 있습니다. 이 퍼즐은 위와 같은 기믹을 사용하여 차원을 넘나드는 것이 특징입니다. 현재 개발 중에 있으며, 위의 기믹을 활용한 재미있는 레벨이나, 게임에 도입하면 좋을 거 같은 창의적인 장치가 떠오르신 분들은 제 블로그 좌측 상단의 메뉴 아이콘을 클릭하면 나오는 ‘문의하기’를 통해 저에게 알려주시길 바랍니다! 게임 개발에 도움을 주신 분들은 게임의 크레딧 항목에 수록해 드리겠습니다. 유사수학 바로가기(이름은 유사수학이지만 다루는 것은 진짜 수학입니다!) "
    }, {
    "id": 8,
    "url": "/youtube/",
    "title": "작곡한 음악과 언어학/수학 영상이 올라오는 유튜브 채널 🎼",
    "body": "2021/01/08 - 친구들과 개발 중인 게임에 사용할 목적으로 음악을 몇 개 작곡했는데, 유튜브에 올리는 것도 괜찮겠다 싶어서 올렸습니다. 작곡한 음악 이외에도 언어학이나 수학, 어쩌면 개발에 관련된 영상도 올릴 예정입니다. 앞으로 좋은 영상 많이 보여드릴 수 있도록 노력할테니 여러분들도 혹시 이런 분야에 관심이 있으시다면 구독 부탁드립니다👏 유튜브 채널 방문하기(당신은 천사!) "
    }, {
    "id": 9,
    "url": "/calendar/",
    "title": "감성이 담긴 2021 수학 캘린더",
    "body": "2020/12/20 - 2021 수학 캘린더가 발매되었습니다! 🥳🎉 캘린더는 12개의 수학 정리와, 각각의 정리를 시각적으로 나타내는 아름다운 그림으로 구성되어 있습니다. 가격은 14,500원(배송비 무료! 이런 혜자가!)입니다. 실물은 아래와 같이 생겼습니다.  아래 링크에서 캘린더를 신청할 수 있습니다. https://forms. gle/M9bVR21YdWKjYvBR9 많은 관심 부탁드립니다! "
    }, {
    "id": 10,
    "url": "/pseudomath/",
    "title": "위트있는 수학 카드뉴스로 가득한 유사수학 페이스북 페이지",
    "body": "2020/12/05 - 유사수학 페이스북 페이지는 제가 고등학생 때부터 관리해 온 페이지로, 제가 느껴온 수학의 아름다움과 재미를 더 많은 사람들과 공유하고자 만든 페이지입니다. 유사수학 페이지에는 수학과 관련된 콘텐츠가 카드뉴스 형식으로 올라옵니다. 주제는 학교에서 가르쳐 주지 않는 신기한 수학이나, 기존 수학 개념의 확장, 신선한 분야의 수학 등입니다. 유사수학 페이지는 현재 팔로워 수가 6천 명을 넘는, 페이스북 수학 관련 페이지 중에서 가장 큰 규모의 수학 페이지 중 하나입니다. 여러분도 수학의 아름다움과 재미를 느껴보고 싶으시다면 지금 유사수학 페이지를 방문해 보세요 😁 유사수학 바로가기(이름은 유사수학이지만 다루는 것은 진짜 수학입니다!) "
    }, {
    "id": 11,
    "url": "/tistory/",
    "title": "수학이 배우고 싶으신 분들을 위한 티스토리 블로그",
    "body": "2020/11/29 - 티스토리 블로그는 제가 이 깃허브 블로그를 만들기 전에 운영하던 블로그입니다. 이 블로그에서는 주로 수학과 관련된 글이 올라옵니다. 미적분, 군론, 정수론 등을 간단하면서도 전반적으로 배울 수 있는 시리즈 글이 올라와 있습니다. 시리즈 글 이외에도 수학에 관련된 흥미로운 토막글이 올라와 있습니다. 새로운 수학을 배워보고 싶으신 분들은 한 번 방문해 주세요! 블로그 방문하기 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>'" + term + "'의 검색결과</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>검색 결과는 공허했습니다.</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>'" + term + "'의 검색결과</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>검색 결과는 공허했습니다.</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});