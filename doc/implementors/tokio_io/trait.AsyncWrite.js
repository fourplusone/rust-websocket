(function() {var implementors = {};
implementors["tokio_core"] = ["impl <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/net/struct.TcpStream.html\" title=\"struct tokio_core::net::TcpStream\">TcpStream</a>","impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for &amp;'a <a class=\"struct\" href=\"tokio_core/reactor/struct.PollEvented.html\" title=\"struct tokio_core::reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>",];
implementors["tokio_io"] = [];
implementors["tokio_tls"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
