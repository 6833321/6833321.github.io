class StrictEqualityExtension {
        getInfo() {
          return {
            id: 'strictequalityexample',
            name: '中/后缀表达式',
            blocks: [
              {
                opcode: 'strictlyEquals',
                blockType: Scratch.BlockType.REPORTER,
                text: '把中缀表达式[ONE]转成后缀表达式',
                arguments: {
                  ONE: {
                    type: Scratch.ArgumentType.STRING,//一个输入，输入类型为STRING字符串
                    defaultValue: '( 1 + 1 ) * 451 / 4191 + 9810'
                  }
                }
              },
              {
                opcode:'jisuan',
                blockType: Scratch.BlockType.REPORTER,
                text: '计算后缀表达式[ONE]',
                arguments: {
                  ONE: {
                    type: Scratch.ArgumentType.STRING,//一个输入，输入类型为STRING字符串
                    defaultValue: '1 1 + 451 4191 / * 9810 +'
                  }
                }
              }
            ]
          };
        }
      strictlyEquals(args) {
        const precedences = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2
          };
        const a = []; // 操作符栈
        const output = []; // 输出后缀表达式的数组
       
        // 将表达式分割成单个字符
        const tokens = args.ONE.split(' ');
       
        for (let token of tokens) {
          // 对于数字直接加入输出数组
          if (!(['+', '-', '*', '/',')','('].includes(token))) {
            output.push(token);
          }
          else if(token=='('){
            a.push('(');
          }
          else if(token==')'){
            while(a.length>0&&a[a.length-1]!='('){
                output.push(a.pop());
            }
            a.pop();
          }
          else {
            // 对于操作符
            var prec1 = precedences[token];
            var prec2 = precedences[a[a.length - 1]];
            while (a.length > 0 && (prec1 !== undefined && prec2 !== undefined) && (prec1 < prec2 || (prec1 === 1 && prec2 === 1))) {
              output.push(a.pop());
            }
            a.push(token);
          }
        }
       
        // 将操作符栈中的所有操作符加入输出数组
        while (a.length > 0) {
          output.push(a.pop());
        }
        console.log(output.join(' '));
        return output.join(' '); // 使用空格分隔的字符串作为结果
      }
      jisuan(args){
        let tokens=args.ONE.split(' ');
        let stack = [];
        
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
            if (['+', '-', '*', '/'].includes(token)) {
                // 取出栈顶的两个元素进行计算
                let num2 = parseFloat(stack.pop());
                let num1 = parseFloat(stack.pop());
                switch (token) {
                    case '+': stack.push(num1 + num2); break;
                    case '-': stack.push(num1 - num2); break;
                    case '*': stack.push(num1 * num2); break;
                    case '/': stack.push(num1 / num2); break;
                }
            } else {
                // 数字直接入栈
                stack.push((token));
            }
        }
        
        // 最后栈顶元素就是结果
        return parseFloat(stack.pop());
      }
    }
    Scratch.extensions.register(new StrictEqualityExtension()); 
    
