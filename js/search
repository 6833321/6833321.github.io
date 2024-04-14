function cutcn(c,text){
  var locales = 'cn';
  var a=Array.from(new Intl.Segmenter(locales, { granularity: 'word' }).segment(text));
  var ans='';
  for(var i=0;i<a.length;i++){
    ans=ans+c+a[i].segment;
  }
  return ans;
}
