import _ from 'lodash'

const storageData = Symbol.for('fake_env_storageData')

window[storageData] = {
  local: {},
  sync: {},
  managed: {},
  listeners: []
}

function __restore() {
  let data;

  try {
    data = JSON.parse(window.localStorage.getItem('storageData'));
  } catch (e) {}

  if (!data) {
    data = {
      local: {},
      sync: {
        baseconfig: {
          v: 1,
          d:
            'xÍVmoÛ6\u0010þ/êZ´A#µ[;\u0014\u0006 KÑ¥è²\u0014un(R"O\u0012gTD*¶e¿}w¤DI\u0007\fÃ>ôa>÷öðîx§»ä\u0006Z+N\u0016Ï¿0îä\r$)\u000bxÔLíä6"]#Ó\nø:Y¸¶CHË]\u0003ï$(1@LË9ï5\u0000éòÔ\bôÜVÇ§¿&OiP¥pU²xñòY\u000f³í\u0019È²rÈ>Y¼BAn6ê¢(,¸ßåË)ð{²8~`íúÜûïyzg§Ë%\u0006ÄXÑn)oQüü\u0007b©eQÊ\b8¦\u0005SFC°@ès%\u001d(i]²ørå\u0014ãë\u001eù|}\\9×üI?öÉ"Ë¾|Í®N¸^ËT{¥GON¾CWG(;J\u0007<;J®Ð\u001b\bé.ô;v\u0013IX`-¯]YuvH3\u001d¯f7«ýá.ÒÛB¶ÀÝ`$L«Ñ¢2JH]\u0011Sn\fXÉb<q×ª1\u00068Ö\u001fî&R[Ì#{Ðlêy\r;L\u00179Å  \u0018~|öì\u001em\u001a©Ï{¢ß\u001e7ßh{ìDþ?ôè®ÿ·Ü§wm?~3\u0004ûàû\u0014é\u0001\u0019\u001c{´Näë·AÕ¿i×Ê\u0006ái|¼^\u000bÊ0A÷W²É\rkEBøÎ¡M®í/÷#$¹¼ø¸úôþç³K¯öÎðÎzÓ;`!â\t\u0007`)\u0005ä¬\r¯¬%LyYö\t/{\u000eµ`Î\u000eÍÙlÎ.\u001a ¢iºfåû+¡´o/[¦-e·4¦TáÎt\u0019\u0017\u000f)ºøêAsÐñÍp&wÝøØ­)M\u0017KH£µÃ»P\u0014^I\r6\u0001]â´ªã\u001fâµiÅ\u0011]´\u00184êZT\nè\u001d¥ÆU¸5ÆbWo\u001a%Ãì4-\u0015\u000fIéÐÆÔÄü~&·\bá±ìÌ®K®îîaÅ\u001a²Pç­\u0014xSüoòN*ª\u0004tÁ\r6@Yãm\r¯¥Rþ¿-ÎIüÓµ¹\u00076[\u0007­Âa«±}R$W´ûBÎnÜ{7ÍÃúr\u000eµ\u0018+6\u00142\u0016\r\u001dÛ£u¨6½Í|±äó­â÷\t®\f||Mk"f\\&¤ýJÁ}à`ý«;ßr\u0016\u0014¶3\bâ{#a³bvKRîÙ¯<#ë|Â\u0012\u001aÏ\r6ÖL/¤k\u001f§ìQùïÂí÷Åd;$f°7Ùl6©\u0017¥ÜÔ=ðºsÅñ«G\u001bñú¡%;,ÿª/Á`ÄuJ°7!Qvr=Q>\u001ccÐ\u000fÒÁ`ìª Úä\u0010\u0007\u000fkwi¦¦-3ÛR¾}²þi\u001d÷/îØÊºQ² "\u0015n\u001d%|ÕÑôó) Ïô\u001c"1\u0002RßÂþÛ\u0016}gÞ\u0001¸]m´òM8p£¸¿Ô\u0002¶iS5\'áf!z_@®\u000f\u0017ãp}g²Y\f2\u001f÷Í\u0006Íëç®gQ§\u001e\u0007ëE\u001f:{@s"ó_Ù\u001eëÿîÂÏ9ëÚÏ´Û\u0004\u001dÉeÎæIõ¿×P\u0012Ç*Óÿìç¯ \u0016¦Î*ï,õûTÂpT*d46H\rm+Y½êgÒÜ¶\u0017\u001e÷ÂØé¡1\u0003ÉZòÖXS¸Ãu4ÛÂ´bî6`Ñ\u0004ë=w6\u0013PH-\t\u001e;\u0004±L±þõmw8^¿bÆ\n¦w2õhhXª³eð\u0017wøèQ@5¦áV®>YÄM§Y\b}x,Meóç\u0006ÐÓê{\u0002~[F&\u00034-ÞÃ0Ãme6 Þ¢+ü\u0010\u0018×d<ß\r\u000b\u001d¿ËF°>ÂG\u0015ma¥ßá\u0017þÚ;\u0010Úgð.9`\u0011¿\th²ó\u0016Üû^%>DÅÙÇ\u000fßËFo÷÷\u0003ç$È',
        },
        syncConfig: { shanbay: { enable: true } },
        hasInstructionsShown: true,
        '7437265461891': {
          v: 1,
          d:
            "xí[Ýoã(\u0010ÿ_xîé6Ý¼U+U«Ójö´\u000fQuÂØ8\u0018,0MÓªÿû1\u0018&mÒMª¤-~=\u0006ÆÀof\u0019È\u0003b1¢ÏÏç.'Æ_¾Ñ\u0019ÊK|eJù¯K\u000eåöÕ\u0012ßÒ¹T9ÊÐ3¤KF\u0016«kW>Ç\\ÛW1#¥FÓ\u0007¤)§¤¤¶d\bÎ#ÅâZ\u001e\u0011\u0013½%R&\u001cè41öáÞ6E7g\bs\u000eí#Ìb\u0003\u000f\u001cÛ\u0006S4ö­Y±fRüpE\u000f3ÖÝ\")\u0013TÓÌp»ôB*EMÍ\u0015\u0015¤iªmÕ\u000e§R·¥²L©Ò5ã¤WÐ[7öG¨>ÇõNÇ\nEçT)\u001a§,IK4½8\u001fuæñ÷7èlÎì·ÇÐü\u000eM¿ö/ËC\u0016PÕa» ´øqmAYÒ¨À\u000eÖÒ~­\u001e¿#Ï;tÛú?ûÍ.\u0019\u0012R@{@ý¬Ã¯ç \fÀvÖá{þõíguÿõÛÞ©@0\b&\u000fÁ!\u001b(ÐöG\u0019û#xÅèü \u001e\u001f½\bw%sä®}$ÓkO-\u0001¬EÀ\fÔºV\u000b§k)ðäÏÉ\u0016ù¼èKdIEÛÏ\"Õ«ÆF\u0011;èúYQIò}¦Â¶#¶Ý\u0004`%­è\u0003;Þ\u0017Ø`rÞÉ©\rÄsÆ¤©SÉS½êõV±\u0017Û\n¯ÎÁX<%YÖkÙf,\u0000\u000e±`Áj¿®¶¨¸ó¾Z»Ø1Ç\u0011ë\u0010\u0014À\u0000Ê¡'#Ãªá×\u0000^\u000e`P¥}\u0011\u001c¬»Eø)]¶HÑrKÁí\u0002XG¶{}°\u0014Õv`ÂXßh\u0002ãÀª\u000bø+ØÇW\u0005lWû4`ã\u0011ä£æ\u0010\u0015¿\u0011\u0017ye\u001c½ð\u0012)±_\u0014í+çÅÖþã»\u000e+á­Vü\u0000\u0018ëXa3\u0015iÄÈU7í6\u001aí\u0010°ÔÒ\u001dÖ-Ü¶Y\ruÅq*Æþ# 0\u001e\rã^ú¤\u001aÛ÷(+þÎ3£öÙ¸'g\rqûHëÇuËîÍ\u001bÉÀ¦z®\u000bh¸\u001cÖæs³¦*\u001a¾Æý×7¾Kþ\rÔ\u0001ÁËØ\u0015ÖPã®\u001d\bîàá­õ?v\u0007]Â23\u000bÓß\"9|å{g[,¼Á\u0007ôHÜ§¼X×òªxæË\u000egó¦ìÍé\u001e§wÈ\u00109\u001f}\u0001~Úò;\u0000à(\u001d\u001d'\u0000C$ï\u0011æ\u0004f)U<Çy;x\"9\u0004û\nÕw\u0013ó\u001c«´}ÒØ(ÓÓ;\u00176td´\tÑ¬ãÙº~æäó \u0014§&\u0014\u0003\u001f\u001aä\u0001\u0012ZÈ,6-¾t\u0006ÅÖ©õþi.3¶!4ÚÛúö'/@»ñ\u0015øª~ à2:\u0007D¢?Ö\u0007Ää¥jÅþ\u0007w­U\u0006Ô\u0014d~\u0006g\u001dB|whÜv\b \u0000\fmñð*,U¯\u000bÇør[rt F\u0011Ö°%æ;Ó\u001c\u0016ª}\f-\u0013\u0019N(¾½S=¡x]\u0016ç\u00179ù\u0014ýÝÓÉ\u0018\u0007<¶Hî%» QQ¹^}!Û3o|kÃªÈp¬Ëq|¤\u001e\u0002sÖÍùvf_4Ö\u000fÄÖ`ö|ÔBA³lpxíÅp¬©FÀãb#\u000b.©â\u0014+ÑË3\u0004{u\u0002Ù<;²}*Üv:¦Ý¶y>¬Ê¦âZ²v¹a¿9\u000b:¨¶íå¹zH°)å3{®\u0018üÅÊi$¢ºËê.zNds\u0004\u0001\u0004Àÿ\u00070d£ªÛÏÊ@/\u0017\u0002\u001b9¬ÝÃ&Y^nkgsÂÄF\u0016\n\u000bÍ{UÖ,A%\b®fbC\u0014ût Zuä9\bIwbm\fbxß?\n¿ÓÙ§°µ`\u0007pàj`\u0013Cäw0ìõ?`rF",
        },
        activeProfileID: '7437265461891',
        profileIDList: [{ id: '7437265461891', name: '%%_default_%%' }],
      },
      managed: {},
    };
  }

  let { local, sync, managed } = data;

  if (local) {
    window[storageData].local = local;
  }
  if (sync) {
    window[storageData].sync = sync;
  }
  if (managed) {
    window[storageData].managed = managed;
  }
}

try {
  __restore();
} catch (e) {
  console.warn(e);
}

function __save() {
  const { listeners, ...data } = window[storageData];
  window.localStorage.setItem('storageData', JSON.stringify(data));
}


window.browser.storage.onChanged.addListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  if (!window[storageData].listeners.some(x => x === listener)) {
    window[storageData].listeners.push(listener)
  }
}
window.browser.storage.onChanged.removeListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  window[storageData].listeners = window[storageData].listeners.filter(
    x => x !== listener
  )
}
window.browser.storage.onChanged.hasListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  window[storageData].listeners.some(x => x === listener)
}

genStorageApis('sync')
genStorageApis('local')
genStorageApis('managed')

function genStorageApis (area) {
  window.browser.storage[area].get.callsFake(keys => {
    if (keys == null) {
      return Promise.resolve(_.cloneDeep(window[storageData][area]))
    }

    if (_.isString(keys)) {
      if (!keys) {
        return Promise.resolve({})
      }
      keys = [keys]
    } else if (_.isArray(keys)) {
      if (keys.length <= 0) {
        return Promise.resolve({})
      }
    } else if (_.isObject(keys)) {
      keys = Object.keys(keys)
      if (keys.length <= 0) {
        return Promise.resolve({})
      }
    } else {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    return Promise.resolve(_.pick(_.cloneDeep(window[storageData][area]), keys))
  })

  window.browser.storage[area].set.callsFake(data => {
    if (!_.isObject(data)) {
      return Promise.reject(new TypeError('Argument 1 should be an object'))
    }

    try {
      // deep clone & check data
      data = JSON.parse(JSON.stringify(data))
    } catch (err) {
      return Promise.reject(new TypeError('Data not serializable'))
    }

    const newData = _.assign({}, window[storageData][area], data)
    const changedItems = Object.keys(data).filter(
      k => !_.isEqual(newData[k], window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: _.cloneDeep(newData[k]),
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = newData
    __save();
    return Promise.resolve()
  })

  window.browser.storage[area].remove.callsFake(keys => {
    if (_.isString(keys)) {
      keys = keys ? [keys] : []
    } else if (!_.isArray(keys)) {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    const newData = _.omit(window[storageData][area], keys)
    const changedItems = keys.filter(
      k => !_.isUndefined(window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: void 0,
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = newData
    __save();

    return Promise.resolve()
  })

  window.browser.storage[area].clear.callsFake(() => {
    const changedItems = Object.keys(window[storageData][area]).filter(
      k => !_.isUndefined(window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: void 0,
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = {}
    __save();

    return Promise.resolve()
  })

  window.browser.storage[area].getBytesInUse.callsFake(keys => {
    if (_.isNull(keys)) {
      return Promise.resolve(
        new Blob([JSON.stringify(window[storageData][area])]).size
      )
    }

    if (_.isString(keys)) {
      keys = keys ? [keys] : []
    } else if (!_.isArray(keys)) {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    if (keys.length <= 0) {
      return Promise.resolve(0)
    }

    return Promise.resolve(
      new Blob([JSON.stringify(_.pick(window[storageData][area], keys))]).size
    )
  })
}

function notifyListeners (changes, area) {
  window[storageData].listeners.forEach(listener =>
    listener(_.cloneDeep(changes), area)
  )
}
