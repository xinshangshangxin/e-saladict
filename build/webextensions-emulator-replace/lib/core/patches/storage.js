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
      local: { qssaRect: { top: 71, left: 605, width: 350, height: 550 } },
      sync: {
        baseconfig: {
          v: 1,
          d:
            'xÍVmoÛ6\u0010þ/êZ´A#µ[;\u0014\u0006 KÑ¥è²\u0014un(R"O\u0012gTD*¶e¿}w¤DI\u0007\fÃ>ôa>÷öðîx§»ä\u0006Z+N\u0016Ï¿0îä\r$)\u000bxÔLíä6"]#Ó\nø:Y¸¶CHË]\u0003ï$(1@LË9ï5\u0000éòÔ\bôÜVÇ§¿&OiP¥pU²xñòY\u000f³í\u0019È²rÈ>Y¼BAn6ê¢(,¸ßåË)ð{²8~`íúÜûïyzg§Ë%\u0006ÄXÑn)oQüü\u0007b©eQÊ\b8¦\u0005SFC°@ès%\u001d(i]²ørå\u0014ãë\u001eù|}\\9×üI?öÉ"Ë¾|Í®N¸^ËT{¥GON¾CWG(;J\u0007<;J®Ð\u001b\bé.ô;v\u0013IX`-¯]YuvH3\u001d¯f7«ýá.ÒÛB¶ÀÝ`$L«Ñ¢2JH]\u0011Sn\fXÉb<q×ª1\u00068Ö\u001fî&R[Ì#{Ðlêy\r;L\u00179Å  \u0018~|öì\u001em\u001a©Ï{¢ß\u001e7ßh{ìDþ?ôè®ÿ·Ü§wm?~3\u0004ûàû\u0014é\u0001\u0019\u001c{´Näë·AÕ¿i×Ê\u0006ái|¼^\u000bÊ0A÷W²É\rkEBøÎ¡M®í/÷#$¹¼ø¸úôþç³K¯öÎðÎzÓ;`!â\t\u0007`)\u0005ä¬\r¯¬%LyYö\t/{\u000eµ`Î\u000eÍÙlÎ.\u001a ¢iºfåû+¡´o/[¦-e·4¦TáÎt\u0019\u0017\u000f)ºøêAsÐñÍp&wÝøØ­)M\u0017KH£µÃ»P\u0014^I\r6\u0001]â´ªã\u001fâµiÅ\u0011]´\u00184êZT\nè\u001d¥ÆU¸5ÆbWo\u001a%Ãì4-\u0015\u000fIéÐÆÔÄü~&·\bá±ìÌ®K®îîaÅ\u001a²Pç­\u0014xSüoòN*ª\u0004tÁ\r6@Yãm\r¯¥Rþ¿-ÎIüÓµ¹\u00076[\u0007­Âa«±}R$W´ûBÎnÜ{7ÍÃúr\u000eµ\u0018+6\u00142\u0016\r\u001dÛ£u¨6½Í|±äó­â÷\t®\f||Mk"f\\&¤ýJÁ}à`ý«;ßr\u0016\u0014¶3\bâ{#a³bvKRîÙ¯<#ë|Â\u0012\u001aÏ\r6ÖL/¤k\u001f§ìQùïÂí÷Åd;$f°7Ùl6©\u0017¥ÜÔ=ðºsÅñ«G\u001bñú¡%;,ÿª/Á`ÄuJ°7!Qvr=Q>\u001ccÐ\u000fÒÁ`ìª Úä\u0010\u0007\u000fkwi¦¦-3ÛR¾}²þi\u001d÷/îØÊºQ² "\u0015n\u001d%|ÕÑôó) Ïô\u001c"1\u0002RßÂþÛ\u0016}gÞ\u0001¸]m´òM8p£¸¿Ô\u0002¶iS5\'áf!z_@®\u000f\u0017ãp}g²Y\f2\u001f÷Í\u0006Íëç®gQ§\u001e\u0007ëE\u001f:{@s"ó_Ù\u001eëÿîÂÏ9ëÚÏ´Û\u0004\u001dÉeÎæIõ¿×P\u0012Ç*Óÿìç¯ \u0016¦Î*ï,õûTÂpT*d46H\rm+Y½êgÒÜ¶\u0017\u001e÷ÂØé¡1\u0003ÉZòÖXS¸Ãu4ÛÂ´bî6`Ñ\u0004ë=w6\u0013PH-\t\u001e;\u0004±L±þõmw8^¿bÆ\n¦w2õhhXª³eð\u0017wøèQ@5¦áV®>YÄM§Y\b}x,Meóç\u0006ÐÓê{\u0002~[F&\u00034-ÞÃ0Ãme6 Þ¢+ü\u0010\u0018×d<ß\r\u000b\u001d¿ËF°>ÂG\u0015ma¥ßá\u0017þÚ;\u0010Úgð.9`\u0011¿\th²ó\u0016Üû^%>DÅÙÇ\u000fßËFo÷÷\u0003ç$È',
        },
        syncConfig: { shanbay: { enable: true } },
        hasInstructionsShown: true,
        '7437265461891': {
          v: 1,
          d:
            "xí[[oã(\u0014þ/<wµIÎ%oÕHÕh5§YÍCT­0&6\u000e\u0006\u000bLÓ´ê_\u000eÆ×¤M:I´%\u000f5ï;s\u000eô\u0001±\u0018MÑçÉÅçóOOã/_Çè\få%¾2¥üWÌ%rûjoé\\ª\u001cMKeè\u0019Ò%#Õµ+c®í«R£é\u0003ÒSRR[2C\u0011\u0013mNp\u001e)\u0016'Ô¦\u0013)\u0013\u000e416qo¢39ö\u0011f±\u0004Ç¶ñ\u0014ýÏÖ¬ºfRüpE\u000f3ÖÃ\")\u0013TÓ:á\u0002wó\u000b©(\u0016un®¨ MSm«vz©)u[*Ë*]çr\\ô\nFëæþ\bÕçØð²^²Ó\u0019X¡è*Eãï%i¦\u0017ç£Î:þþ\u0006Íýö\u0018ß¡é×þÏö!\u000b¨ê°]PZü¸¶ ,iT`gi¿VÏßeÏ;ù¶õöÝ\u001efHH\u0001í\u0001õ³NE<\u00072@·³N¿÷é_ß~VÏ_¿í\n\u0004ë`ñ\u0010¬\u0019µ\u0002mÿ(cÿ\b^ut~\u001eí\\\u001c»Ì\u001c¹ß>ÌôÒS3Àgk\nølÃZÖj\u0012ø|Í\u0002}ÓüláçE%\u0015í8T¯\u001a\u001dEì¤ë´¢\u001c;äÇLmGl»\tÀJ0[\u0019Ñ\u0007v¼/°Aå¼\u0017S+çIS§âS½Ýõv±\u0017ë\n/ÎAY<Å,kµlS\u0016\u0000X° µ_WÄG[DÜ®y_¬Á\\ì¨ãu2\u0014ÀCOFUÓ¯\u0001\u001c½\u001cÀ Jû\"8Øw\tð5Sºl¢å*Û\u0019\u0005°¬÷.û`)ªíÄ±¶Ñ\u0004æU\u00176\u0003þWÐ¯\nØ6«öiÀÆ#\u0000É{ÍÁ+~#&*\u0011óJ9zò\u0012)±_\u0014í+gÅÖöã»v+òV;~ÀÁÇ:ÛLE¥bÚm 1rÕ\r»F;8,5»Ã>p°Û6K³¡¬X0NEÙ\u0004\u0014Æ£ávÜ\u000b\u001fTcû\u001eeÅß\u0019qª0qù¥M\u001brÚ\u0010·IZ'×5»ïl\u0006½\ftªïu\u0001\rCÕzÓ|n¶±ÐTEÃ×¸ÿúÆ\u000fÉ¿:@¼-Xa\u00155îê`\u000e\u001e^[ùcsÐ\u0005,3³0ý#ÓW¾\u0007x¶ùÂ\u001bl@Ä}\nÁu)¯g¾ÜÉpV8kÊ>ìqzÇ\fóÑ7à§5¿Y\b°\bÒÑq\u00020¤Hò\u001e\u0018AhN@hRÅs·'sI°¯P}7Q8Ï±ª³vL\u001a\u001berzóÓ&\u001f\u0019­aAt'êx¶.9&9ã<âÔH1°¡\u000f\u0010ÐBf±i»ô¥3(¶F­·Os±\r®ÑÞÚ·¿x\u0001Ú¯À·Tõ\u001d\u0005\u0017Ñ9 \u0012ý¹~< &/uTS,®ô?¸«­:y@MAägp×!øwÆm\u0007\u0007\u0002ÀÐ\u0016¯\b¯ÂVõºp/·\u0005G\u0007b\u0014a\rGb~0Íe¡ÚÆÐ2áâ99Õ\u001b\u00079eqvã§è®NÄ8PòØÜ»QÐ¨(ø\\¯¾í\u00197¾µnUd8VÁä8>RN9ëÆ|G»x³/ëGb«3{>j¡ Y6¸¼öb8ÖD#àñG¾\u0005DTqèÅ\u0019¾:hYÓ}*Ü\u000e:¦Ý¶q>¬Ê¦âZ°v¹á¼9Ü\u000b:¨´íe¹zH°)å3g®\u0018ìÅÊh$¢zËê.zFds\u0005\u0001\bàÿ\u00070D£*ÛÏr \u0017\u000b\u001cÖáÄL\u0013Ål_îhgsÀÄz\u0016\n\u000bÍ{UÖ4AE\u0004W3x±Á}Ú\u0011-ÊÚó\u001c¸¤»x±Ï6\u0006\u001aÞ÷¯Âït÷)\u001cí\u001fØ\u0000\u001c\u001aØÄà#ù\u0013\fûû\u001f\\ÐF",
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
