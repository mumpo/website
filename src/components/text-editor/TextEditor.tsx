import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { darkStyle } from './styles/darkStyle';

SyntaxHighlighter.registerLanguage('typescript', typescript);

const Container = styled.div`
  color: #dcdfe2;
  background: #31394a;
`;

const Footer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  color: #717a84;
  background: #242935;
  flex-direction: row-reverse;
  padding:0 20px;
  border-top: 1px solid #434a54;
`;

const FooterLanguage = styled.span`
  transition: color .2s ease-in-out;
  &:hover {
    color: #ddd;
  }
`;

interface TextEditorProps {
  code: string;
  language: string;
}

class TextEditor extends PureComponent<TextEditorProps> {
  render() {
    const { code, language } = this.props;
    return (
      <Container>
        <SyntaxHighlighter
          language="typescript"
          style={darkStyle}
          showLineNumbers={true}
          lineNumberContainerStyle={{
            color: '#dcdfe2',
            background: '#2b3140',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
          lineNumberStyle={{
            width: '50px',
            height: '25px'
          }}
          wrapLines={true}
          lineProps={{
            style: {
              width: '100%',
              padding: "0 0.5em",
              '&:hover': {
                backgroundColor: '#000'
              },
            }
          } as React.HTMLAttributes<HTMLElement>}
        >
          {code}
        </SyntaxHighlighter>
        <Footer>
          <FooterLanguage>
            {language}
          </FooterLanguage>
        </Footer>
      </Container>
    )
  }
}

export default TextEditor;
