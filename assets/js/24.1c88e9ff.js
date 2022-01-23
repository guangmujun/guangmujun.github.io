(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{600:function(e,s,n){"use strict";n.r(s);var r=n(7),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_9用户角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9用户角色"}},[e._v("#")]),e._v(" 9用户角色")]),e._v(" "),n("h2",{attrs:{id:"_9-1-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-前言"}},[e._v("#")]),e._v(" 9.1 前言")]),e._v(" "),n("blockquote",[n("p",[e._v("项目地址：https://gitee.com/guangmujun/micro-blog 个人网站：https://guangmujun.cn\nFlask Web学习：https://guangmujun.cn/archives/category/learning-note/flask-web\nMySQL学习：https://guangmujun.cn/archives/category/learning-note/mysql-note 参考：")])]),e._v(" "),n("h2",{attrs:{id:"_9-2-角色在数据库中的表示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-角色在数据库中的表示"}},[e._v("#")]),e._v(" 9.2 角色在数据库中的表示")]),e._v(" "),n("p",[n("code",[e._v("app/models.py")]),e._v(" 定义不同的权限")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nclass Permission:               # 不同的权限\nFOLLOW = 0x01               # 关注其他用户\nCOMMENT = 0x02              # 可在文章中发布评论\nWRITE_ARTICLES = 0x04       # 写文章\nMODERATE_COMMENTS = 0x08    # 管理他人的评论\nADMINISTER = 0x80           # 管理网站")]),e._v(" "),n("p",[e._v("定义具有不同权限组合的用户")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nclass Role(db.Model):\n"),n("strong",[e._v("tablename")]),e._v(" = 'roles'\nid = db.Column(db.Integer, primary_key=True)\nname = db.Column(db.String(64), unique=True)\ndefault = db.Column(db.Boolean, default=False, index=True)\npermissions = db.Column(db.Integer)\nusers = db.relationship('User', backref='role', lazy='dynamic')")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    def __repr__(self):\n        return '<Role %r>' % self.name\n\n    @staticmethod\n    def insert_roles():\n        roles = {                                                   # 具有不同权限组合的用户\n            'User': (Permission.FOLLOW |\n                     Permission.COMMENT |\n                     Permission.WRITE_ARTICLES, True),\n            'Moderator': (Permission.FOLLOW |\n                          Permission.COMMENT |\n                          Permission.WRITE_ARTICLES |\n                          Permission.MODERATE_COMMENTS, False),\n            'Administrator': (0xff, False)\n        }\n        for r in roles:\n            role = Role.query.filter_by(name=r).first()\n            if role is None:\n                role = Role(name=r)\n            role.permissions = roles[r][0]\n            role.default = roles[r][1]\n            db.session.add(role)\n        db.session.commit()\n")])])]),n("p",[e._v("迁移更新数据库 将角色写入数据库")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\n>>> Role.insert_roles()\n>>> Role.query.all()\n[<Role 'User'>, <Role 'Moderator'>, <Role 'Administrator'>]")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318100148.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"_9-3-赋予角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-赋予角色"}},[e._v("#")]),e._v(" 9.3 赋予角色")]),e._v(" "),n("p",[e._v("用户注册时，根据其电子邮件，确定赋予其管理员角色，还是用户角色。 "),n("code",[e._v("app/models.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nclass User(UserMixin, db.Model):\n...")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    def __init__(self, **kwargs):\n        super(User, self).__init__(**kwargs)                                    # 调用基类构造函数\n        if self.role is None:\n            if self.email == current_app.config['FLASKY_ADMIN']:                # 管理员\n                self.role = Role.query.filter_by(permissions=0xff).first()\n            if self.role is None:\n                self.role = Role.query.filter_by(default=True).first()          # 用户\n")])])]),n("h2",{attrs:{id:"_9-4-角色验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-角色验证"}},[e._v("#")]),e._v(" 9.4 角色验证")]),e._v(" "),n("p",[e._v("检查是否有指定的权限 "),n("code",[e._v("app/models.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nfrom flask_login import UserMixin, AnonymousUserMixin")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("def can(self, permissions):  # 请求角色和赋予角色进行位与操作\n    return self.role is not None and \\\n(self.role.permissions & permissions) == permissions\n\ndef is_administrator(self):  # 检查管理员角色\n    return self.can(Permission.ADMINISTER)\n\nclass AnonymousUser(AnonymousUserMixin):  # 用户未登录时current_user的值\n    def can(self, permissions):\n        return False\n\n    def is_administrator(self):\n        return False\n")])])]),n("p",[e._v("​")]),e._v(" "),n("p",[n("code",[e._v("app/decorators.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\n​"),n("br"),e._v("\nfrom functools import wraps\nfrom flask import abort\nfrom flask_login import current_user\nfrom .models import Permission")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\ndef permission_required(permission):\ndef decorator(f):\n@wraps(f)\ndef decorated_function(*args, **kwargs):\nif not current_user.can(permission):  # 用户不具有指定权限，返回403错误\nabort(403)\nreturn f(*args, **kwargs)\nreturn decorated_function\nreturn decorator")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\ndef admin_required(f):\nreturn permission_required(Permission.ADMINISTER)(f)")]),e._v(" "),n("p",[e._v("​")]),e._v(" "),n("p",[n("code",[e._v("app.main/views.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\n@main.route('/admin')\n@login_required\n@admin_required\ndef for_admins_only():\nreturn \"管理员用户界面\"")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\n@main.route('/moderator')\n@login_required\n@permission_required(Permission.MODERATE_COMMENTS)\ndef for_moderator_only():\nreturn \"操作员用户界面\"")]),e._v(" "),n("p",[n("code",[e._v("app/main/__init__.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nfrom flask import Blueprint\nfrom ..models import Permission")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("main = Blueprint('main', __name__)  # param 1：蓝本的名字，param 2：蓝本所在的包或模块\n")])])]),n("p",[e._v("​"),n("br"),e._v("\n@main.app_context_processor            # 使用上下文处理器，让变量在所有模板中全局可访问\ndef inject_permissions():\nreturn dict(Permission=Permission)")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nfrom . import views, errors")]),e._v(" "),n("p",[n("code",[e._v("tests/test_user_model.py")])]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nimport unittest\nimport time\nfrom app import create_app, db\nfrom app.models import User, AnonymousUser, Role, Permission")]),e._v(" "),n("p",[e._v("​"),n("br"),e._v("\nclass UserModelTestCase(unittest.TestCase):\ndef setUp(self):\nself.app = create_app('testing')\nself.app_context = self.app.app_context()\nself.app_context.push()\ndb.create_all()\nRole.insert_roles()")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("    def tearDown(self):\n        db.session.remove()\n        db.drop_all()\n        self.app_context.pop()\n\n    def test_roles_and_permissions(self):\n        u = User(email='john@163.com', password='cat')\n        self.assertTrue(u.can(Permission.WRITE_ARTICLES))\n        self.assertFalse(u.can(Permission.MODERATE_COMMENTS))\n\n    def test_anonymous_user(self):\n        u = AnonymousUser()\n        self.assertFalse(u.can(Permission.FOLLOW))\n")])])]),n("p",[e._v("​"),n("br"),e._v("\n​")]),e._v(" "),n("h2",{attrs:{id:"_9-5-效果展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-效果展示"}},[e._v("#")]),e._v(" 9.5 效果展示")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("注册一个普通用户Dan@163.com后，数据库的存储情况 用户角色id为1，默认为普通用户 "),n("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318105624.png",alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("普通用户登录后，试图访问"),n("code",[e._v("127.0.0.1:5000/admin")]),e._v(" "),n("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318105737.png",alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("使用管理员邮箱注册，默认分配的用户角色id为3 "),n("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318110018.png",alt:""}})])]),e._v(" "),n("li",[n("p",[e._v("使用管理员账号，访问admin页面")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://my-imags.oss-cn-shanghai.aliyuncs.com/pic/20210318110104.png",alt:""}})])])}),[],!1,null,null,null);s.default=a.exports}}]);