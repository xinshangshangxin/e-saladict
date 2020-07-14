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
    data = {"local":{"qssaRect":{"top":125,"left":465,"width":772,"height":554}},"sync":{"baseconfig":{"v":1,"d":"xÍWmo\u00147\u0010þ/Û Jî@\n\"\b  \u0012@¹H´pòzgwÝóÚ{~ÉÞ¦¿½3ö¾\u0003Uª*ñ%º}æíñÌxÆ¹N®ÀX¡U²xøËaÂ¸\u0013W,r&-\u001c&Æ«×êyÑ3ÅäÎ\tn3\u001e\u0001_gÌÁI\t|ÝAJ_ìjx%@f#;Q1\u0017¢D%ÉTq¢3|)NÞ&IÍ\u0014È\u000f\"se²xôøA\u000b±í)¢tçd,  Õ|ç\u0016ÜïÈúñ\u0018ø#Y\u001c=B$cf}\u0016ü·\f³å\u0012\u0003b¬\\+·\u0014_ \u001eºÎò¥\u0012y>(#àÊÔ\n¢\u0005B\u001fJá@\nëÅÇË<¯[äcòù^é\\ý\u0017ý±÷\u0017óùÇÏóËc®ÖâÓ§\u0002wo>;¸ü3:;@éÁ$Ï\u000fËÃo\u0017Z\u0017\u0012¼\u0005Ã3(¾¸®nûúJÈ1\u0012µÀ\f/O¦6»þ\u0013ôµâº@&Ü;õ]uÅªK_\u0014`]_z§=/'9®ÂÇu\"øPèL\u0018à®WÉ´Oå`Qj\tU\u0011-E>|qgä\u0010\u0003\u001ck?n\u000e\u0013¡,ÖÉ=(6ö¼\u0006<jpAA2üúõÁ\u001b´©:kväZª?\u0000·Ðò·Øý8©ÛØ÷ÿ\u000bÁÿÿÎæÀ©Æ6-é\u0014|ý\"jÉâ¨\u0011\u001eÅÆ\u0019áÈÂvx,\u001aV?ón¸\u001a\u001bûFóv%'/ß^¼<\u000fJ¯4÷vð5\u001e\u001e\u001dfYcl\u0004\"8`\bxÏ\nX\u001c\u001b#3¨\u0006\n)ÛÏ4e\u0013¦){W\u0003±¬uíëUh¬ò½½0LYJk\u0019]°ö\u0019Ó.\n#2ùþºâ FcbçÕPV]h?Tæ»ÇÓP\u001c^\n\u0005¶\u000f\u0004ªÀYv2â6×Ú\u0000ëÇGn0l¯kQudwvjWâ*\u001bÚ9^>r Å0Aµ¡Ú!)\u0015;úÒßNñä\u000bBøYx½óÉå\rÑÝ¯RoS\u001aªÔ\fO¿uê\u0005n=4òÑ\r¶@Q1*OÅx%¤\f¿%lqDâ\u000foÒ\u00004Z\u0007FâUØ¼]1p-àBYOü:¹\tn(û)µ\u0005í1Ô¬+e_5Ú\n£u¬7ÝfºÝÒéj\u000b[\t7\rÞI¾¦\u0005kHèa\u000b}%Gi·×:Y¦¹E³Èòö\u001a\u001b+µ*Ý\nÛãc³ù®ýf3Za!nñ\u0012)\u001fÚ>^\u001aÈ(cW\u0002\u0015³+ÜåTô\u0010v\u0015r\"ñY3@q\u0003Rfd!ñT\u001aê­ëZ¼`ÅØrl»¬wÆcÓ4³ \n,í±§ÞåGOî6ÙÓ;ì°·Vm};#®f\u0004\u0007\u0013\u0012Í7#åý1:ý(í\fê5\u0011Æ\b3»Y/iSÌm\rRrzÞÍÛ{{Ô^ç#+ªZ\\@ÖSáºÞQ.W&kH\u0001y¦»6\u0014\bY¸\u001fáíC\u0016}Ï\u0003p»J+\u0019:¼ãF'\u0019ðp\u001e¡2ØÎê²>'ÑÛZqµ¿\u0018­ø{²½Y\u001c5ãO\n\u0006ëæéÃ»IÔ±ÇÎºÇ&>h\nÍÃ£w~ö¿ó¡ö¸\bÓjJ»Ò\u0010Rí¨#¸HÙ4«\u0001\n¤\u00148´ú¶¿£Zi«Ô[j\u0004;õ)ñ\u0002Â¨T1¥}T``ÕªxSÛVxÔ\nûV\u0019IV\u001bmuîö\u0017Rosm²©Ûõ\u0004ØàÙÛy\u0006¹Pà®»cþG§ÝçÊÿ)Øvv?v!ö¹ÌÚY@oõÁé2FÅ#O¿+Á  êÓP®:^ÇgX\f\u001d·Ç~ZífÜüY\u0004\u0003­¶[\u0010i·tÏ¤Æe½\u0013w-u\u0003Ù\u000btoa=÷ß×ÝS\u0002u-²¸¶â;¶Z÷¸Æ*ÖáÕBhÁëdEÿ\u001a¡yÎ\r¸×­Jüú­W<kBøV6x»¹ù\u0007îg §"},"profileIDList":[{"id":"8788202509794","name":"默认情景"}],"8788202509794":{"v":1,"d":"xí[KoÛ8\u0010þ/<g±²l\u0013ß\u0002Á¶(zÚE\u000fF°\u0018IE[\"\u0005Rã\u0004ùïË¡(ëa7vj'vjú\u0010âC$¿3CæÜS©àd48#,&#rõéêj\u0018\f/ëO×\u0017ää%ÜèRüË\u0013a¹y5{\bQ)5=#ªdÑlqkË\u0013Èy\u0015³¨TdôD\u0014ÍhTRS2&!ã\u0013Ó<<,P\b1É\u000463Ð1\bx4/ÈÝ\u0019,ÃÎB`±ÆD\u0006¦§\u0011\u0019¸©Y}ÇÌä-z\"O2¦ÒzQÊ8U´ÎN¡v~&$\u0005^ç\u0012Iy´lªLÕVO1Õ¥jJE%¬s9Qz£µ\u000bñÕ\u0013ÐYY¯ßñ\f¬4¡RÒøoÊ&iIFçÃ µ?>ã`sVF\u000e\u000fdtÝý>DU-Ð3Jo·\u00069\r\u000b°àªì\u000bg%\u0003óQ\u0012,Báë\u0012ónYlvØÊ7þgÒîxL¸àØ\u001eá¬õ\"NPFZ_\u001b·?²\u0018\u001f6Íîª¯[Lÿøü½zþóÃ<)'\u0002Á¥ÇfàÊb2¤6¸ëh¸Í­f´å:°¿]äÚ)b-?.[\u000bË.%¨VÛZ\\¾!ýÈÒ=¼Ø Ý]y.)oÆY¤j±¤»ÈLºNKe77fÊM»È´»@X#`\u000bÍ»À\u000ev\u0005Ö\u0013'¬ï-zyu*i¬÷ÝÎ\u000eúj¦qdà©æ§Tó×å&ªA8øyÎ[\b6\u0010Yó.)X\u0003´!óµ2\u0014ÁÀEOUÓ¯\u0001\f^\u000f W¥]\u0011ìíÚ\u0011\u000báIU6HÑr\u000b\u0019y°\u000eÎ{\u001d°$Ufb\\\u001bËê\u0002ç\u0001²\rFßÏóã1ÙÄ-À\u0006\u0001äÜwï¿³{þ\u0006.Z*IC©¸õñHaò²\u0019ú\túì­UWþ½÷nü4ìJ<å\u0015C5»ÈDE;b\u0018\u0004[ø;Ùý6²W'öuÅq,{Å) 0\bú»y'v\u0015¥\nÌ{2-þF\n'6?7imS\r¡IÒ:¹º\u0001¸ÎÆØ[4ENu½Î°á¼O­wËÏ×\u0016êª¨ÿ\u001aº¯ïÜÜ\u001b¬7e3V\u0018¢6\u000f\u001c5ùñÉúüêI\u001b,êî\u001eî\u001cO¬ô7 ô\u001a\u000bÒ!ñbècUÉ«â±+·*<-¬1e\u001eVõ2úÀ\"áýîï¿?'~\u000b\u00133\u0010\u0000÷vÒÁqB0\u0004ä\u001d0¼Ò\u001cÒÌ\u0013ÈÉ£»*\"p\u0015ªïN$ä9È:kÆ¤@K½,§\u000f\u0017\u0019]æC­\u0014.ºm;Ø+úC3ã\u001c{¡xc¡¸ØIQu#Àp\u0018Ñ³uÛ¥+\u001dc±±iy)[ã\u0019íÌ¾ÝÅ;yh·#_\u000e÷Tvý\u0004\u001bÐÙ#\u0012Ý¹\u001e\u0010\u001bu¬ï§¦ÀoÔWh³U+¨I\füôîY\u001c{÷;à¶\u0003`(W\b\u000b¿U½-\u001cË\rp÷Ô(\u0004\u0007jn0ËJµ¡ÄDø»ï~s\u0012W¶>]ÙË\u0011µª¬tóîÑÌñ½@lÞI·\u0013`-Cïï½ù&ºcÌúÞ¸t¡Î@zsçðH=[=ÏX;Þ\u001clãI¿j®'ÄFGz\u00184PÐé´wíîÕp¬¨Çãü2\u0003*©Ì(HÞqx¾:L¸©{ñ&ËîTB3èJvßÄ\u0018AË+âù£n%i¯Ú¶Ýë \u0001]\u0017ÎSm1ÚÑ\u0018ñêYÎ«g:ë\u0018ËÛ\u000f(\u0000î?'}$ì ºý¢\ftâ0èz°æü(f*ÌôeÖ\u0007kg!«¬Se\t*A°5½\u000fì}à·ò²ö[{\u000eí6>ðQ\u001f»ÿ\u0002°Õ¥-)aÏæcÏP\u0001\u001d£åÎ^Ìï\u0018¿Ì#"},"activeProfileID":"8788202509794"},"managed":{}};
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
