import React from 'react';
import {mount} from 'react-mounter';

import {Menu} from         '../../imports/ui/menu.jsx';
import {indexLayout} from  '../../imports/ui/index.jsx';
import {OtherLayout} from  '../../imports/ui/index.jsx';
import {Middate} from      '../../imports/ui/indexContent.jsx';
import PriceMath from      '../../imports/ui/math.jsx';
import Result from         '../../imports/ui/result.jsx';
import {HelpName} from     '../../imports/ui/name.jsx';
import {AboutName} from    '../../imports/ui/name.jsx';
import {Helpcontent} from  '../../imports/ui/about.jsx';
import {Aboutcontent} from  '../../imports/ui/about.jsx';


FlowRouter.route("/", {
  action() {
    mount(indexLayout, {
      menu: <Menu activeItem={'home'}/>,
      content: (
        <div>
          <Middate />
          <PriceMath />
        </div>
      )
    });
  }
});

FlowRouter.route('/p/:dist', {
    action(params, queryParams) {
        mount(indexLayout, {
            menu: <Menu activeItem={'home'}/>,
            content: (
        <div>
            <Middate />
            <PriceMath />
            <Result {...params} {...queryParams}/>
        </div>
      )
    });
    }
})

FlowRouter.route('/help', {
  action() {
    mount(OtherLayout, {
      menu: <Menu activeItem={'help'}/>,
      name: <HelpName />,
      content: (
          <Helpcontent />
      )
    });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(OtherLayout, {
      menu: <Menu activeItem={'about'}/>,
      name: <AboutName />,
      content: (
          <Aboutcontent />
      )
    });
  }
});


FlowRouter.notFound = { //所有 404 页面
  action() {
    alert("你找的地址不存在")
    FlowRouter.go("/")
  }
};
